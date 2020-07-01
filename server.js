var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
const express = require('express');
var path = require('path');
const app = express();
const port = 8080;
var router = express.Router();

//app.use(express.bodyParser());

//Search directory and put all pages into an array on startup
//let pageArray = 

var serverFunctions = require('./serverFunctions.js');

app.use( express.static(path.join(__dirname,'/public')));
app.use( express.static(path.join(__dirname,'/views')));
//const { createLocalCopy } = require('./serverFunctions');


//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/',(req, res)=>{
  res.sendFile('./index.html', { root: __dirname});
  //res.sendFile('./css/styles.css', {root: __dirname});
  res.get('/start', ()=>{
    serverFunctions.createLocalCopy();
  });
  
});
app.get('/about',(req, res)=>{
  res.sendFile('./about.html', { root: __dirname});
} );

app.post('/submit', function(req, res){ //, next){
  var url = req.body.url;
  console.log("This is your URL: %s ", url);
  serverFunctions.createLocalCopy(url);
  //next();
  console.log("Downloading . . .");
});

app.post('/search', function(req, res){
  var artist_name = req.body.artistname;
  var song_name = req.body.songname;
  setTimeout(function(){
      console.log("Your artist's name is %s and your song is %s", artist_name, song_name)
    },5000);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));

//app.get('')



