import { ipcRenderer } from 'electron'

const startTabulation = (section) => {
  return ipcRenderer.sendSync('startTabulation', section)
}

export default {
  startTabulation
}
