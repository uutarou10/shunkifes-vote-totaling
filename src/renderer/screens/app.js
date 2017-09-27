import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Container } from 'semantic-ui-react'
import history from '../history'

import Top from './Top/view'
import AddGroup from './AddGroup/view'
import AddProject from './AddProject/view'

class App extends React.Component {
  render () {
    return (
      <div style={{overflow: 'hidden'}}>
        <ConnectedRouter history={history}>
          <Container style={{marginTop: '2em'}}>
            <Redirect to='/top'/>
            <Route path='/top' component={Top}/>
            <Route path='/addGroup' component={AddGroup}/>
            <Route path='/addProject' component={AddProject}/>
          </Container>
        </ConnectedRouter>
      </div>
    )
  }
}

export default App
