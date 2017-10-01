import { ipcMain } from 'electron'
import csvImportService from '../service/csvImportService'

ipcMain.on('csvImport', (event, arg) => {
  csvImportService.parse(arg)
})
