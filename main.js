const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

app.on('ready', function(){
  win = new BrowserWindow ({width: 1280, height: 800, icon: path.join(__dirname, 'icon.png')})
  win.setMenu(null);
  win.loadURL(url.format ({
    pathname: path.join(__dirname, 'index.html'),

    protocol: 'file',
    slashes: true
  }));
});
