import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import history from '../history'
import store from '../store'


class App extends React.Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Redirect to='/top'/>
          <Route path='/top' component={Top}/>
          <Route path='/second' component={Second}/>
          <Route path='/third' component={Third}/>
        </div>
      </ConnectedRouter>
    )
  }
}

const Top = () => {
  return (
    <div>
      <p>this is top</p>
      <Link to='/second'>second</Link>
      <Link to='/third'>third</Link>
    </div>
  )
}

const Second = () => {
  return (
    <p onClick={() => {
      store.dispatch(push('/top'))
    }}>this is Second</p>
  )
}

const Third = () => {
  return (
    <p>this is third</p>
  )
}
export default App
