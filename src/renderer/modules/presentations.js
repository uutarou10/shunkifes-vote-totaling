import { combineReducers } from 'redux'

// action types
const ADD_PRESENTATION = 'ADD_PRESENTATION'
const SAVE_PRESENTATIONS = 'SAVE_PRESENTATIONS'

// action creator
export const addPresentation = (presentation) => {
  return {
    type: ADD_PRESENTATION,
    payload: presentation
  }
}

// reducer

const presentations = (state = [], action) => {
  if (action.type === ADD_PRESENTATION) {
    return [
      ...state,
      {
        id: action.payload.id,
        section: action.payload.section,
        groupName: action.payload.groupName,
        projectName: action.payload.projectName
      }
    ]
  }
  return state
}

const isSaved = (state = true, action) => {
  if (action.type === ADD_PRESENTATION) {
    // 未保存の発表があるので的な（眠い
    return false
  }

  if (action.type === SAVE_PRESENTATIONS) {
    return true
  }

  return state
}

// root reducer

export default combineReducers({
  presentations,
  isSaved
})

// selector

export const getPresentations = state => state.reducer.presentations.presentations
