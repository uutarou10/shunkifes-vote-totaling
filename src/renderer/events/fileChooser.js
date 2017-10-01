import {
  ipcRenderer
} from 'electron'

const open = () => {
  return ipcRenderer.sendSync('openFileDialog')
}

export default {
  open
}
