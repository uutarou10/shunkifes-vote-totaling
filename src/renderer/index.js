import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './screens/app'
import store from './store'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

ReactDOM.render(
  <RootComponent/>,
  document.getElementById('root')
)
