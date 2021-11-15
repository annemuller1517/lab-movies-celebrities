// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

// all your routes here
router.get('/movies/create', (req, res, next) => {
    CelebrityModel.find()
    .then((data) => {
        res.render('movies/new-movie', {data})
    })
    .catch((err)=> {
        next(err)
    })
  
})

router.post('/movies/create', (req, res, next) => {
    console.log(req.body)  
MovieModel.create(req.body)
  .then(() => {  
    res.redirect('/movies/movies')
  })
  .catch((err) => {
    res.render('/movies/new-movie')
  })

})

router.get("/movies/movies", (req, res, next) => {
  MovieModel.find()
  .then((data)=> {
    res.render('movies/movies', {data})

  })
  .catch((err)=> {
    next(err)

  })
})


router.get("/movies/:id", (req, res, next) => {
    let {id} = req.params
    MovieModel.findById(id)
        .populate("celebrity")
        .then((data)=> {
            console.log(data)
            console.log(data.title)
            res.render('movies/movie-details', {data})
        })
        .catch((err)=> {
            next(err)
    
        })
    })



router.get('/movies/:id/delete', (req, res, next) => {
    MovieModel.findByIdAndDelete(req.params.id)
      .then(() => {  
        res.redirect('/movies/movies')
      })
      .catch((err) => {
        next(err)
      })
    
    })

router.get('/movies/:id/edit', (req, res, next) => {
    
    MovieModel.findById(req.params.id)
    CelebrityModel.find()
        .then((data) => {  
            res.render('/movies/edit-movie', {data})
        })
        .catch((err) => {
            next(err)
        })
    
    })
    
router.post('/movies/:id', (req, res, next) => {
    MovieModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {  
           res.redirect('/movies/movies')
        })
        .catch((err) => {
        next(err)
        })
    
    })
    



module.exports = router;