import React from 'react'
import {
  Header,
  Table,
  Button,
  Icon,
  Tab
} from 'semantic-ui-react'
import store from '../../store'
import { push } from 'react-router-redux'
import ReturnMenuButton from '../../component/returnMenu'

const AddProject = (groupName) => {
  return (
    <div style={{padding: '10px'}}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>団体名</Table.HeaderCell>
            <Table.HeaderCell>企画名</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>{groupName}</Table.Cell>
            <Table.Cell>ほげふがぴよ</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const panes = [
  {menuItem: '中学発表', render: () => AddProject('中学')},
  {menuItem: '高校発表', render: AddProject},
  {menuItem: '高校販売', render: AddProject},
  {menuItem: '部活・同好会', render: AddProject},
  {menuItem: '後夜祭', render: AddProject}
]

const AddProjectTab = () => {
  return (
    <div>
      <Header as='h2' content='企画登録'/>
      <Tab panes={panes} />
      <div style={{textAlign: 'right'}}>
        <Button style={{marginTop: '0.25em', marginRight: '10px'}} color='green' onClick={() => store.dispatch(push('/top'))}><Icon name='save'/>保存</Button>
        <ReturnMenuButton />
      </div>
    </div>
  )
}

export default AddProjectTab
