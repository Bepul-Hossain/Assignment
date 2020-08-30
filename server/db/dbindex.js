const mongoose = require('mongoose');
//const mongdata="mongodb://127.0.0.1:27017/mydb";
const mongdata = "mongodb://Bepul:Bepul@cluster0-shard-00-00-lo1zs.mongodb.net:27017,cluster0-shard-00-01-lo1zs.mongodb.net:27017,cluster0-shard-00-02-lo1zs.mongodb.net:27017/database?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
// connects our back end code with the database
mongoose.connect(mongdata, { useNewUrlParser: true,useUnifiedTopology:true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;