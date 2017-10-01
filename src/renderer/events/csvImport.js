import { ipcRenderer } from 'electron'

const startParse = (path) => {
  ipcRenderer.send('csvImport', path)
}

export default {
  startParse
}
