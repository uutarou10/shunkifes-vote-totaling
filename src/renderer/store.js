import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './modules'
import history from './history'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import state from './events/state'

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const stateSender = (store) => (next) => (action) => {
  next(action)
  state.update(store.getState())
}

const rootReducer = combineReducers({
  reducer,
  router: routerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger, stateSender, routerMiddleware(history)))

export default store
