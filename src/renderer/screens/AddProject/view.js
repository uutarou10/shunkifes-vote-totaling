import React from 'react'
import {
  Header,
  Table,
  Button,
  Input,
  Modal,
  Form,
  Dropdown
} from 'semantic-ui-react'
import _ from 'lodash'
import ReturnMenuButton from '../../component/returnMenu'
import connect from './connect'
import { withState, compose } from 'recompose'

const enhance = compose(
  withState('section', 'setSection', ''),
  withState('grade', 'setGrade', ''),
  withState('classNumber', 'setClassNumber', ''),
  withState('groupName', 'setGroupName', ''),
  withState('projectName', 'setProjectName', '')
)

const AddProject = (props) => {
  const {
    section,
    setSection,
    grade,
    setGrade,
    classNumber,
    setClassNumber,
    groupName,
    setGroupName,
    projectName,
    setProjectName,
    presentations,
    addPresentation
  } = props

  const options = [
    {
      value: 'junior-high-school',
      text: '中学発表'
    },
    {
      value: 'high-school-presentation',
      text: '高校発表'
    },
    {
      value: 'high-school-selling',
      text: '高校販売'
    },
    {
      value: 'club',
      text: '部活・同好会・有志'
    }
  ]

  const sections = {
    'junior-high-school': '中学発表',
    'high-school-presentation': '高校発表',
    'high-school-selling': '高校販売',
    'club': '部活・同好会',
    'after-party': '後夜祭'
  }

  let newId = 1
  if (presentations.length > 0) {
    newId = _.last(presentations).id + 1
  }

  return (
    <div style={{padding: '10px'}}>
      <Header as='h2' content='企画登録'/>
      <Modal
        trigger={<Button>団体追加</Button>}
      >
        <Modal.Header>団体追加</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>No</label>
              <p>{newId}</p>
            </Form.Field>
            <Form.Field>
              <label>区分</label>
              <Dropdown
                placeholder='区分を選択…'
                value={section}
                options={options}
                onChange={(e, data) => setSection(data.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>学年</label>
              <Input fluid type='number' value={grade} onChange={(e) => setGrade(parseInt(e.target.value))}/>
            </Form.Field>
            <Form.Field>
              <label>クラス</label>
              <Input fluid type='number' value={classNumber} onChange={(e) => setClassNumber(parseInt(e.target.value))}/>
            </Form.Field>
            <Form.Field>
              <label>団体名</label>
              <Input fluid value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
              <label>企画名</label>
              <Input fluid value={projectName} onChange={(e) => setProjectName(e.target.value)}/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            disabled={groupName === '' || projectName === '' || section === '' || grade === null || classNumber === null}
            primary
            onClick={() => {
              addPresentation({
                id: newId,
                section: section,
                grade: grade,
                classNumber: classNumber,
                groupName: groupName,
                projectName: projectName
              })
              setSection('')
              setProjectName('')
              setGroupName('')
              setGrade('')
              setClassNumber('')
            }}>追加</Button>
        </Modal.Actions>
      </Modal>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>学年</Table.HeaderCell>
            <Table.HeaderCell>クラス</Table.HeaderCell>
            <Table.HeaderCell>区分</Table.HeaderCell>
            <Table.HeaderCell>団体名</Table.HeaderCell>
            <Table.HeaderCell>企画名</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            presentations.map((presentation) => {
              return (
                <Table.Row key={presentation.id}>
                  <Table.Cell>{presentation.id}</Table.Cell>
                  <Table.Cell>{presentation.grade}</Table.Cell>
                  <Table.Cell>{presentation.classNumber}</Table.Cell>
                  <Table.Cell>{sections[presentation.section]}</Table.Cell>
                  <Table.Cell>{presentation.groupName}</Table.Cell>
                  <Table.Cell>{presentation.projectName}</Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
      <ReturnMenuButton/>
    </div>
  )
}

export default enhance(connect(AddProject))
