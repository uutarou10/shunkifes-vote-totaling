import React from 'react'
import {
  Header,
  Table,
  Button,
  Icon,
  Tab,
  Input,
  Modal,
  Form,
  Dropdown
} from 'semantic-ui-react'
import store from '../../store'
import { push } from 'react-router-redux'
import ReturnMenuButton from '../../component/returnMenu'
import connect from './connect'
import { withState, compose } from 'recompose'

const enhance = compose(
  withState('groupName', 'setGroupName', '');
)

const AddProject = (props, section) => {
  const sections = {
    'junior-high-school': '中学発表',
    'high-school-presentation': '高校発表',
    'high-school-selling': '高校販売',
    'club': '部活・同好会',
    'after-party': '後夜祭'
  }

  return (
    <div style={{padding: '10px'}}>
      <Modal
        trigger={<Button>団体追加</Button>}
      >
        <Modal.Header>団体追加</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>No</label>
              <p>1</p>
            </Form.Field>
            <Form.Field>
              <label>区分</label>
              <p>{sections[section]}</p>
            </Form.Field>
            <Form.Field>
              <label>団体名</label>
              <Input fluid/>
            </Form.Field>
            <Form.Field>
              <label>企画名</label>
              <Input fluid/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={() => {
            console.log(props)
            props.addPresentation({
              id: 1,
              section: section,
              groupName: 'group',
              projectName: 'project'
            })
          }}>追加</Button>
        </Modal.Actions>
      </Modal>
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
            <Table.Cell><Input fluid/></Table.Cell>
            <Table.Cell><Input fluid/></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const panes = (props) => {
  return [
    {menuItem: '中学発表', render: () => AddProject(props, 'junior-high-school')},
    {menuItem: '高校発表', render: () => AddProject(props, 'high-school-presentation')},
    {menuItem: '高校販売', render: () => AddProject(props, 'high-school-selling')},
    {menuItem: '部活・同好会', render: () => AddProject(props, 'club')},
    {menuItem: '後夜祭', render: () => AddProject(props, 'after-party')}
  ]
}

const AddProjectTab = (props) => {
  return (
    <div>
      <Header as='h2' content='企画登録'/>
      <Tab panes={panes(props)}/>
      <div style={{textAlign: 'right'}}>
        <Button
          style={{marginTop: '0.25em', marginRight: '10px'}} color='green'
          onClick={() => store.dispatch(push('/top'))}
        ><Icon name='save'/>保存</Button>
        <ReturnMenuButton/>
      </div>
    </div>
  )
}

export default connect(AddProjectTab)
