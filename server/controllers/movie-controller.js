const Movie = require('../models/movie-model.js')
//'movies' is a mongdb database name
createMovie = (req,res) =>{
    const body = req.body
    //console.log(body)
    if (!body) {
        return res.status(404).json({
            success: false,
            error: 'You must provide a movie'
        })
    }
    const movie = new Movie(body)
    if (!movie) {
        return res.status(405).json({success: false, error: err})
    }
    movie.save().then(()=>{
        return res.status(201).json({
            success: true,
            
        })
    }).catch(error=>{
        return res.status(406).json({
            error,
            msg: 'Movie Not created'
        })
    })
}
getMovie = async(req,res)=>{
   await Movie.find({}, (err,movies)=>{
       if (err) {
           return res.status(400).json({success: false, error: err})
       }
       if (!movies.length) {
           return res.status(405).json({success: false, error: 'movie not found'})
       }
       return res.status(200).json({success:true, data: movies})
   }).catch(err=>console.log(err))
}



module.exports = {
    createMovie,
    getMovie,
}