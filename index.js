const { app, BrowserWindow, ipcMain, shell, dialog, Menu, MenuItem } = require('electron')
const contextMenu = require('electron-context-menu')
const WindowStateManager = require('electron-window-state-manager')
const path = require('path')
const os = require('os')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).options({
	port: { type: 'string', default: '6595' },
	host: { type: 'string', default: '127.0.0.1' },
  dev: { type: 'boolean', default: false}
}).argv
const server = require('./server/dist/app.js')

const PORT = process.env.DEEMIX_SERVER_PORT || argv.port

process.env.DEEMIX_SERVER_PORT = PORT
process.env.DEEMIX_HOST = argv.host

let win
const windowState = new WindowStateManager('mainWindow', {
  defaultWidth: 800,
  defaultHeight: 600
})

function createWindow () {
  win = new BrowserWindow({
    width: windowState.width,
    height: windowState.height,
    x: windowState.x,
    y: windowState.y,
    useContentSize: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, os.platform() === 'win32' ? 'build/icon.ico' : 'build/64x64.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setMenu(null)

  if (argv.dev){
    const menu = new Menu()
    menu.append(new MenuItem({
      label: 'DevTools',
      submenu: [
        { role: 'reload', accelerator: 'f5', click: () => { win.reload() } },
        { role: 'devtools', accelerator: 'f12', click: () => { win.webContents.toggleDevTools() } }
      ]
    }))
    Menu.setApplicationMenu(menu)
  }

  // Open links in external browser
  win.webContents.on('new-window', function(e, url) {
    e.preventDefault()
    shell.openExternal(url)
  })

  win.loadURL(`http://${argv.host}:${PORT}`)

  if (windowState.maximized) {
    win.maximize();
  }

  win.on('close', (event)=>{
    windowState.saveState(win);
  })
}

app.whenReady().then(() => {
  createWindow()
  contextMenu({
    showLookUpSelection: false,
    showSearchWithGoogle: false,
    showInspectElement: false
  })

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

ipcMain.on('openDownloadsFolder', (event)=>{
  const { downloadLocation } = server.getSettings().settings
  shell.openPath(downloadLocation)
})

ipcMain.on('selectDownloadFolder', async (event, downloadLocation)=>{
  let path = await dialog.showOpenDialog(win, {
    defaultPath: downloadLocation,
    properties: ["openDirectory", "createDirectory"]
  })
  if (path.filePaths[0]) win.webContents.send("downloadFolderSelected", path.filePaths[0])
})
