import React from 'react'
import {
  Header,
  Table,
  Input
} from 'semantic-ui-react'
import ReturnMenuButton from '../../component/returnMenu'
import {
  compose,
  withState
} from 'recompose'
import connect from './connect'

const InputVotes = (props) => {
  const {
    presentations,
    updateVisitorVote
  } = props

  const sections = {
    'junior-high-school': '中学発表',
    'high-school-presentation': '高校発表',
    'high-school-selling': '高校販売',
    'club': '部活・同好会',
    'after-party': '後夜祭'
  }

  return (
    <div>
      <Header as='h2' content='来場者投票入力'/>
      <div style={{textAlign: 'right'}}>
        <div style={{padding: '10px'}}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>区分</Table.HeaderCell>
                <Table.HeaderCell>団体名</Table.HeaderCell>
                <Table.HeaderCell>企画名</Table.HeaderCell>
                <Table.HeaderCell>票数</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {presentations.map((presentation) => {
                return (
                  <Table.Row key={presentation.id}>
                    <Table.Cell>{presentation.id}</Table.Cell>
                    <Table.Cell>{sections[presentation.section]}</Table.Cell>
                    <Table.Cell>{presentation.groupName}</Table.Cell>
                    <Table.Cell>{presentation.projectName}</Table.Cell>
                    <Table.Cell>
                      <Input
                        type='number'
                        fluid
                        onChange={(e) => {
                          updateVisitorVote(presentation.id, parseInt(e.target.value))
                        }}
                      /></Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </div>
        <ReturnMenuButton/>
      </div>
    </div>
  )
}

export default connect(InputVotes)
