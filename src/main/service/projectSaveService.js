import fs from 'fs'
import { join } from 'path'

const save = (obj, path = join(process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'], 'Desktop', 'votes.json')) => {
  if (!fs.existsSync(path)) {
    fs.writeFile(path, JSON.stringify([]))
  }

  fs.writeFile(path, JSON.stringify(obj), () => {
    console.log(new Date(), 'saved!!')
  })
}

const load = (path = join(process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'], 'Desktop', 'votes.json')) => {
  return JSON.parse(fs.readFileSync(path))
}

export default {
  save,
  load
}
