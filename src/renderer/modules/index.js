import { combineReducers } from 'redux'
import presentations from './presentations'
import votes from './votes'

const rootReducer = combineReducers({
  presentations,
  votes
})

export default rootReducer
