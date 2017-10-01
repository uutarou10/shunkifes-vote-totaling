import React from 'react'
import {
  Header,
  Table
} from 'semantic-ui-react'
import tabulation from '../../events/tabulation'
import ReturnMenuButton from '../../component/returnMenu'

class Result extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header as='h2'>集計結果</Header>
        <p>{JSON.stringify(this.state)}</p>
        <ReturnMenuButton/>
      </div>
    )
  }

  componentDidMount () {
    const juniorHighSchool = tabulation.startTabulation('juniorHighSchool')
    const highSchoolPresentation = tabulation.startTabulation('highSchoolPresentation')
    const highSchoolSelling = tabulation.startTabulation('highSchoolSelling')
    const club = tabulation.startTabulation('club')

    this.state = {
      juniorHighSchool,
      highSchoolPresentation,
      highSchoolSelling,
      club
    }

    console.log('state', this.state)
  }
}

export default Result
