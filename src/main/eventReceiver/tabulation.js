import { ipcMain } from 'electron'
import tabulationService from '../service/tabulationService'

ipcMain.on('startTabulation', (event, arg) => {
  event.returnValue = tabulationService.tabulation(arg)
})
