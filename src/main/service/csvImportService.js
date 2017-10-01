import fs from 'fs'
import projectSaveService from './projectSaveService'
import votesStore from './votesStore'

const iconv = require('iconv-lite')
const csvSync = require('csv-parse/lib/sync')

// pathを渡したらパースしてオブジェクトを返す
const parse = (path) => {
  const rawCsv = iconv.decode(fs.readFileSync(path), 'Shift_JIS')
  const obj = csvSync(rawCsv)

  const votes = []

  for (let i = 1; i < obj.length; i += 1) {
    votes.push(totaling(obj[i]))
  }

  votesStore.set(votes)
}

// voteObjを返す
const totaling = (voteObj) => {
  const grade = parseInt(voteObj[0])
  const classNumber = parseInt(voteObj[1])
  const myGroupIds = [
    parseInt(voteObj[3] + voteObj[4]),
    parseInt(voteObj[5] + voteObj[6])
  ]
  const juniorHighSchool = parseInt(voteObj[7] + voteObj[8])
  const highSchoolPresentation = parseInt(voteObj[9] + voteObj[10])
  const highSchoolSelling = parseInt(voteObj[11] + voteObj[12])
  const club = parseInt(voteObj[13] + voteObj[14])

  const myGroupId = findGroupByClass(grade, classNumber).id

  const vote = {
    juniorHighSchool: 0,
    highSchoolPresentation: 0,
    highSchoolSelling: 0,
    club: 0
  }

  if (juniorHighSchool !== myGroupId) {
    vote.juniorHighSchool = juniorHighSchool
  }

  if (highSchoolPresentation !== myGroupId) {
    vote.highSchoolPresentation = highSchoolPresentation
  }

  if (highSchoolSelling !== myGroupId) {
    vote.highSchoolSelling = highSchoolSelling
  }

  if (club !== myGroupIds[0] && club !== myGroupIds[1]) {
    vote.club = club
  }

  return vote
}

const findGroupByClass = (grade, classNumber) => {
  const projects = projectSaveService.load().presentations

  return projects.filter((project) => {
    return project.grade === grade
  }).filter((project) => {
    return project.classNumber === classNumber
  })
}

export default {
  parse
}
