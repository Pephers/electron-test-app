const { app, BrowserWindow, ipcMain } = require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600})
    win.on('closed', () => {
      win = null
    });

    win.loadURL(`file://${__dirname}/index.html`)

    win.on('message', (evt) => {
        switch (evt.data) {
            case 'click-button':
                win.minimize();
                break;
        }
    });

    ipcMain.on('message', (event, arg) => {
        switch (arg) {
            case 'titlebar-show':
                win.setTitleBarStyle('normal');
                break;

            case 'titlebar-hide':
                win.setTitleBarStyle('hidden');
                break;
        }
    });
});
