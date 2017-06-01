Raspberry Pi Video Looper
=========================

This is a simple app that when started with `node app.js` will play it's video on a loop using omxplayer's `--loop` option. It is *NOT* perfect, but is pretty good for longer files well-rendered.

## How to use

Start the app using `node app.js` and navigate to `http://[pi ip]:3000` to upload a video file.

### How to install NodeJS on a Raspberry Pi 3

```shell
wget https://nodejs.org/dist/v7.6.0/node-v7.6.0-linux-armv7l.tar.xz
tar -xzf node-v7.6.0-linux-armv7l.tar.xz
cd node-v7.6.0-linux-armv7l
sudo cp -R * /usr/local/
```

For other Pi's, substitute `armv7l` accordingly (find the one needed by running `uname -a`)
Then to install dependencies, just do `npm install` from the app directory.

### To do (short term)
- Ability to file manage previously uploaded files and choose which is active
- Ability to delete uploaded files
- Ability to set Pi output format through web ui
- New web control UI and upload progress monitor
- Ability to react if files fail (possibly testing files to make sure they play through before making it the 'go to' file because upload might have failed)
- Security, obviously

#### To Do (long term)
- Set up a .sh file to _completely_ set up the Pi

## Setting up the Pi in the best way for this use
Start with Raspbian Jessie
- Using `sudo raspi-config`, make the following tweaks
  - Change the boot options to _Console Autologin_
  - Enable SSH (and change your password from the default)
  - In advanced options, set the Memory Split to a decent amount (512MB on a Pi 3 works well)
- Reboot the Pi

- Install NodeJS as above
- `git clone` this repository and `cd` into it
- Install dependencies using `npm install`

- Set up launching on boot using **PM2**
```shell
sudo npm install -g pm2
pm2 startup
#This asks you to run the following command
sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 start app.js
pm2 dump #this saves PM2's configuration to reload on next boot
```
