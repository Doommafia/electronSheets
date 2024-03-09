const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create the browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the index.html file
    mainWindow.loadFile('index.html');
}

// Create window when Electron has finished initializing
app.whenReady().then(createWindow);