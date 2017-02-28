# Raspberry Pi Video Looper

This is a simple app that when started with `node app.js` will play it's video on a loop using omxplayer's `--loop` option. It is *NOT* perfect, but is pretty good for longer files well-rendered.

## How to use

Start the app using `node app.js` and navigate to `http://[pi ip]:3000` to upload a video file.

### How to install NodeJS on a Raspberry Pi

```shell
wget https://nodejs.org/dist/v7.6.0/node-v7.6.0-linux-armv7l.tar.xz
tar -xzf node-v7.6.0-linux-armv7l.tar.xz
cd node-v7.6.0-linux-armv7l
sudo cp -R * /usr/local/
```
Then to install dependencies, just do `npm install` from the app directory.

### To do (short term)
- Test how it works with PM2
- Ability to file manage previously uploaded files and choose which is active
- Ability to delete uploaded files
- New web control UI and upload progress monitor
- Ability to react if files fail (possibly testing files to make sure they play through before making it the 'go to' file because upload might have failed)
- Security, obviously

#### To Do (long term)
- Set up a .sh file to _completely_ set up the Pi
