import {
  ipcMain,
  dialog
} from 'electron'
import path from 'path'

ipcMain.on('openFileDialog', (event) => {
  dialog.showOpenDialog({
    defaultPath: path.join(process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'], 'Desktop'),
    filters: [
      {
        name: 'CSV File',
        extensions: ['csv', 'CSV']
      }
    ]
  }, (filePath) => {
    event.returnValue = filePath[0]
  })
})
