import {app, ipcMain, BrowserWindow} from 'electron';

app.on('ready', createWindow);

let win : BrowserWindow;

function createWindow(): void {

    win = new BrowserWindow({
        width: 1920, height: 1080,
        webPreferences: {
            preload: __dirname + "/preload.js",
            contextIsolation: true
        },
        show: false
    });

    win.loadFile('./index.html');
    win.on('ready-to-show', ()=>win.show());
}
