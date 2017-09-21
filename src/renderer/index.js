import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Container } from 'semantic-ui-react'

const Component = () => {
  return (
    <div>
      <Container>
        <Header as='h2'>
          hogefugapiyomoge
        </Header>
      </Container>
    </div>
  )
}

ReactDOM.render(
  <Component />,
  document.getElementById('root')
)
