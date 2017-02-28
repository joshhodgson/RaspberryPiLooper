// command to run: omxplayer -b -o hdmi --loop --no-osd video.mp4

var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');



var configuration = {
    omxPlayerParams: ['--loop', '--no-osd', '-o', 'hdmi', '-b']
}
var OMXPlayer = require('omxplayer')
var omxplayer = new OMXPlayer(configuration);

var mediaFolder = "media"


var app = express();

app.use(formidable());

app.post('/upload', (req, res) => {

    fs.rename(req.files.upload.path, __dirname + "/media/" + req.files.upload.name, function(err) {
        console.log("Moved..?")
        newVideo(req.files.upload.name)
    });
    res.end("Got it!")



});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


fs.readFile('./currentvid.txt', (err, data) => {
    if (err) return;
    console.log(String(data))
    newVideo(String(data))
})

function newVideo(name) {
    omxplayer.stop();
    setTimeout(() => {
        console.log("Playing file " + mediaFolder + "/" + name)
        omxplayer.start(mediaFolder + "/" + name, function(error) {
            console.log(error)
        });
        //write to file so it will reload next time
        fs.writeFile('./currentvid.txt', name, console.log)
    }, 1000)
}

app.listen(3000)
