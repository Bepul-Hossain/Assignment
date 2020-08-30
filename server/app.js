const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const logger = require('morgan')
const path = require('path');
const apiPort = process.env.PORT || 9698

const db = require('./db/dbindex')

const movieRouter = require('./routes/movie-router.js')

app.use(express.static(path.resolve(__dirname , "../client/build")));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/api', movieRouter)

app.get('/', (req, res) => {
    res.send('succefull')
})
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../client/build","index.html"));
})

app.listen(apiPort, () => console.log(`Server running on port `+apiPort));

