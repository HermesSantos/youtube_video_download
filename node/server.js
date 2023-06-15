import express from 'express'
import ytdl from 'ytdl-core';
import fs from 'fs';

const app = express();

function donwloader (url) {
  console.log('Por favor, aguarde')
  const videoURL = url; // Get the YouTube video URL from the query parameters

  // Set the file name and path
  const fileName = 'video.mp4';
  const filePath = `./${fileName}`;

  // Create a write stream to save the video file
  const writeStream = fs.createWriteStream(filePath);

  // Download the video and pipe it to the file
  ytdl(videoURL, { quality: 'highest' }).pipe(writeStream);

  // When the download is complete, send a response to the client
  
  writeStream.on('finish', () => {
      console.log('Download concluído')
      // Delete the file after download is complete
      // fs.unlinkSync(filePath);
    });
  };
;

donwloader('https://www.youtube.com/watch?v=thbDZBQk3Ng')


// Start the server
const port = 3000; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
