import React from 'react'
import {
  Header,
  Table,
  Input,
  Dropdown,
  Button,
  Icon
} from 'semantic-ui-react'
import store from '../../store'
import { push } from 'react-router-redux'


const AddGroup = () => {
  return (
    <div style={{height: '100vh'}}>
      <Header as='h2' content='参加団体登録'/>
      <Button style={{margin: '0.25em 0'}}>行の追加</Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>団体名</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell><Input fluid /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div style={{textAlign: 'right'}}>
        <Button style={{marginTop: '0.25em', marginRight: '10px'}} color='green' onClick={() => store.dispatch(push('/top'))}><Icon name='save'/>保存</Button>
        <Button style={{marginTop: '0.25em'}} primary onClick={() => store.dispatch(push('/top'))}>メニューに戻る</Button>
      </div>
    </div>
  )
}

export default AddGroup
