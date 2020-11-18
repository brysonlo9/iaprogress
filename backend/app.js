var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// connect to mongodb cluster databse with mongoose

const  mongoAtlasUri ="mongodb+srv://19lob4:jadebee@testcluster.onbct.mongodb.net/testCluster?retryWrites=true&w=majority";

try {
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Mongoose - Sucess!")
    );
}catch (e) {
    console.log("Mongoose - Could not connect");
}

var db = mongoose.Connection;

app.get('/', (req,res)=>{
    res.send('Cardify Api')
});


// start server on port 3000

app.listen(3000);
console.log('Active on port 3000');