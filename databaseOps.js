var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/mydb";

MongoClient.connect(url, function(err,db){
    if (err) throw err;
    console.log("Connected");
    db.close();
});

