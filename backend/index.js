const express = require("express");
const fs = require("fs");
const app = express();

app.get ("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});


app.get ("/video/:video", function(request, response){
    const range = request.headers.range;

    const uri = "./videos/" + request.params.video;
    

    if(!range){
        response.status(400).send("Requires Range Header");
    }

    const videoPath = uri;
    const videoSize = fs.statSync(uri).size;

    // Parse Range
    //Example = "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "videos/mp4",
    };
    response.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(response);
});

app.listen(3000, function(){
    console.log("Listen port 3000!");
})