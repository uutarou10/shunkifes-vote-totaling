import projectSaveService from './projectSaveService'
import votesStore from './votesStore'

// const tabulation = (section) => {
//   const project = projectSaveService.load()
//   const result = []
//
//   project.presentations.forEach((presentation) => {
//     const id = presentation.id
//     const resultObj = {
//       id: id,
//       count: 0
//     }
//
//     // 外部投票
//     project.votes.visitorVotes.forEach((vote) => {
//       if (vote.id === id) {
//         resultObj.count = vote.vote
//       }
//     })
//
//     // 内部投票
//     votesStore.get().forEach((vote) => {
//
//     })
//   })
// }

const sectionConvertTable = {
  juniorHighSchool: 'junior-high-school',
  highSchoolPresentation: 'high-school-presentation',
  highSchoolSelling: 'high-school-selling',
  club: 'club'
}

const tabulation = (section) => {
  const result = {}
  const projects = projectSaveService.load()

  const selectedSectionProjects = projects.presentations.filter((presentation) => {
    return presentation.section === sectionConvertTable[section]
  })

  selectedSectionProjects.forEach((project) => {
    // visitor
    projects.votes.visitorVotes.forEach((visitorVote) => {
      if (visitorVote.id === project.id) {
        result[project.id] = visitorVote.vote
      }
    })

    // inside
    votesStore.get().forEach((hoge) => {
      let count
      if (result[hoge[section]] === undefined) {
        count = 1
      } else {
        count = result[hoge[section]] + 1
      }
      result[hoge[section]] = count
    })
  })

  console.log('りざると', result)
  return result
}

export default {
  tabulation
}
