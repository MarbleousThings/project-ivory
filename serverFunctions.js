const fs = require('fs');
const ytdl = require('ytdl-core');
const readline = require('readline');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');


//require('launch-json');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
 
//ytdl('http://www.youtube.com/watch?v=A02s8omM_hI', {filter: format=> format.container === 'mp4'})
//  .pipe(fs.createWriteStream('video.flv'));

//'https://www.youtube.com/watch?v=adudqtq2gBw'
//let id = 'adudqtq2gBw';



module.exports ={

  createLocalCopy : function ( newURL ){

    let parseID = newURL.split("watch?v=");
    let id = parseID[1];

   let stream = ytdl(id, {
      quality: 'highestaudio',
    });

    try{
    let start = Date.now();
    ffmpeg(stream)
      .audioBitrate(128)
      .save(`${__dirname}/${id}.mp3`)
     .on('progress', p => {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${p.targetSize}kb downloaded`);
      })
      .on('end', () => {
        console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
      });

    } catch (error) {
      console.log(error);
      //console.error(error);

    }
  }
}




//*Extra shit*//

/* let stream = ytdl(id, {filter: format=> format.container === 'audioonly',})
    .pipe(fs.createWriteStream('video.mp3')); */

    
    
    
/* 
    let info = ytdl.getInfo(id).then(info =>{
        //console.log('title:', info.videoDetails.title);
        console.log(info.videoDetails.title);
    }
    )
    
    .catch(function(error){
        console.log(error);
        console.log('info failed to print');
    }); */
    
  

    //console.log('this is from console.log');
    //process.stdout.write('this is from process.stdout.write\n');
    //console.log( JSON.stringify(info, null, "    ") );
