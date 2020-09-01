const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const logger = require('morgan')
const path = require('path');
const apiPort = process.env.PORT || 9698

// const multer = require("multer");
// const uuid = require("uuid");
// const morgan = require("morgan");
// const pathup = "./uploads";



const db = require('./db/dbindex')

const router = require('./routes/router.js')

app.use(express.static(path.resolve(__dirname , "../client/build")));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, pathup);
//     },
//     filename: (req, file, cb) => {
//         cb(null, uuid.v4().toString() + "_" + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//         cb(null, true);
//     } else {
//         cb("Type file is not access", false);
//     }
// };

// const upload = multer({
//     storage,
//     fileFilter,
//     limits: 1024 * 1024 * 5
// });

//     app.use(morgan("dev"));
//     app.use(express.json({ extented: false }));

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('succefull')
})
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../client/build","index.html"));
})

app.listen(apiPort, () => console.log(`Server running on port `+apiPort));



