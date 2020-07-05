var fs = require('fs'),
    path = require('path')
    av = require('av'),
    mp3 = require('./mp3.js');
    //filePath = require('filePath');

//const { Console } = require('console');


    

module.exports ={
  //FileFFT : audioFile [or path to], metadata for audioFile
  fileFFT : function(audioFile, metadata){     
    
    var asset = AV.Asset.fromFile(audioFile);
  

    asset.decodeToBuffer(function(buffer){
      console.log('The first float32 value is %s', buffer[0]);
    });
    

  }
}