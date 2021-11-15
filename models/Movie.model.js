//  Add your code here
const mongoose = require("mongoose")
require("./Celebrity.model")

const MoviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String, 
    celebrity: {type: mongoose.Schema.Types.ObjectId,
    ref: 'Celebrity'}
})

const MovieModel = mongoose.model("Movie", MoviesSchema) 

module.exports = MovieModel