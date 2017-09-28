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

const AddProject = (groupName) => {
  const sectionOptions = [
    {
      text: '中学発表',
      value: 'junior-high-school'
    },
    {
      text: '高校発表',
      value: 'high-school-presentation'
    },
    {
      text: '高校販売',
      value: 'high-school-seling'
    },
    {
      text: '部活・同好会・有志',
      value: 'club'
    },
    {
      text: '後夜祭',
      value: 'after-party'
    }
  ]

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
              <Dropdown
                placeholder='区分を選択...'
                options={sectionOptions}
                fluid
                section
              />
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
          <Button primary>追加</Button>
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
      <Tab panes={panes}/>
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

export default AddProjectTab
