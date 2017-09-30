import { app, BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

let window

function createWindow () {
  window = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false
  })

  window.loadURL(format({
    pathname: join(__dirname, '..', 'static', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed', () => {
    window = null
  })

  window.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
