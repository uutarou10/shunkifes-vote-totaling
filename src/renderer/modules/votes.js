import _ from 'lodash'
import { combineReducers } from 'redux'

// constants
const UPDATE_VOTE = 'UPDATE_VOTE'

// action creator
export const updateVisitorVote = (presentationId, voteCount) => {
  return {
    type: UPDATE_VOTE,
    payload: {
      id: presentationId,
      vote: voteCount
    }
  }
}

// reducer
const visitorVotes = (state = [], action) => {
  if (action.type === UPDATE_VOTE) {
    console.log('id', action.payload.id)
    return _.uniqBy([
      {
        id: action.payload.id,
        vote: action.payload.vote
      },
      ...state
    ], 'id')
  }

  return state
}

const insideVotes = (state = [], action) => {
  return state
}

export default combineReducers({
  visitorVotes,
  insideVotes
})
