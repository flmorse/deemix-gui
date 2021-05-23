const { app, BrowserWindow, globalShortcut, ipcMain, shell} = require('electron')
const path = require('path')

const PORT = process.env.PORT || '6595'

function isDev() {
  return process.argv[2] == '--dev';
}

function createWindow () {
  require('./server/dist/app.js')
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setMenu(null)

  if (isDev()){
    globalShortcut.register('f5', function() {
  		win.reload()
  	})
    globalShortcut.register('f12', function() {
  		win.webContents.openDevTools()
  	})
  }

  // Open links in external browser
  win.webContents.on('new-window', function(e, url) {
    e.preventDefault()
    shell.openExternal(url)
  })

  win.loadURL(`http://localhost:${PORT}`)
}

app.whenReady().then(() => {
  createWindow()

  // Only one istance per time
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
