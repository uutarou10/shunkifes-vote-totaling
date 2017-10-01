import fs from 'fs'
import projectSaveService from './projectSaveService'
const iconv = require('iconv-lite')
const csvSync = require('csv-parse/lib/sync')

// pathを渡したらパースしてオブジェクトを返す
const parse = (path) => {
  const rawCsv = iconv.decode(fs.readFileSync(path), 'Shift_JIS')
  const obj = csvSync(rawCsv)

  const votes = []
}

const findProjectByClass = (grade, classNumber) => {

}

export default {
  parse
}
