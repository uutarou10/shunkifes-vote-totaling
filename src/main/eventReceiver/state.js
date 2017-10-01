import { ipcMain } from 'electron'
import projectSaveService from '../service/projectSaveService'

ipcMain.on('updateState', (event, arg) => {
  projectSaveService.save(arg.reducer)
  console.log(JSON.stringify(arg.reducer))
})
