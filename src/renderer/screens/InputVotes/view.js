import React from 'react'
import {
  Header,
  Table,
  Button,
  Icon,
  Tab,
  Input
} from 'semantic-ui-react'
import store from '../../store'
import { push } from 'react-router-redux'
import ReturnMenuButton from '../../component/returnMenu'

const Project = () => {
  return (
    <div style={{padding: '10px'}}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>団体名</Table.HeaderCell>
            <Table.HeaderCell>企画名</Table.HeaderCell>
            <Table.HeaderCell>票数</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>ほげふがぴよ</Table.Cell>
            <Table.Cell>ほげふがぴよ</Table.Cell>
            <Table.Cell><Input fluid/></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const panes = [
  {menuItem: '中学発表', render: Project},
  {menuItem: '高校発表', render: Project},
  {menuItem: '高校販売', render: Project},
  {menuItem: '部活・同好会', render: Project},
  {menuItem: '後夜祭', render: Project}
]

const InputVotesTab = () => {
  return (
    <div>
      <Header as='h2' content='来場者投票入力'/>
      <Tab panes={panes} />
      <div style={{textAlign: 'right'}}>
        <Button style={{marginTop: '0.25em', marginRight: '10px'}} color='green' onClick={() => store.dispatch(push('/top'))}><Icon name='save'/>保存</Button>
        <ReturnMenuButton />
      </div>
    </div>
  )
}

export default InputVotesTab
