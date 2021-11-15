// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const CelebrityModel = require("../models/Celebrity.model");

// all your routes here
router.get('/celebrities/create', (req, res, next) => {
  console.log("hey")
  res.render('celebrities/new-celebrity')
})


router.post('/celebrities/create', (req, res, next) => {
  CelebrityModel.create(req.body)
  .then(() => {
    res.redirect('/celebrities/celebrity')
  })
  .catch((err) => {
    res.render('/celebrities/new-celebrity')
  })

})

router.get("/celebrities/celebrity", (req, res, next) => {
  CelebrityModel.find()
  .then((data)=> {
    res.render('celebrities/celebrity', {data})

  })
  .catch((err)=> {
    next(err)

  })
})


module.exports = router;