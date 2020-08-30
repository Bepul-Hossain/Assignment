const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        username: { type: String, required: true},
        email: {type: String, required: true}
    }
)

module.exports = mongoose.model('movies',Movie)