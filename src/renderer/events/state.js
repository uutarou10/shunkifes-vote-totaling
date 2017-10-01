import { ipcRenderer } from 'electron'

const update = (newState) => {
  ipcRenderer.send('updateState', newState)
}

export default {
  update
}
