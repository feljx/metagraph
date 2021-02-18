'use strict';

var electron = require('electron');

function createWindow() {
  var win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');
}

electron.app.whenReady().then(createWindow);
electron.app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});
electron.app.on('activate', function () {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
