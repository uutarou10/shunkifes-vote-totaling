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

export default presentations

// selector

export const getPresentations = state => state.reducer.presentations
