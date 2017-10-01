import React from 'react'
import { push } from 'react-router-redux'
import store from '../../store'
import {
  Grid,
  Header,
  Icon,
  Button
} from 'semantic-ui-react'

const subheaderStyle = {
  marginBottom: '1em'
}

const buttonStyle = {
  marginBottom: '0.5em'
}

const Start = () => {
  return (
    <div>
      <Header as='h1' subheader='Ver 0.0.1' content='ShunkiFes Tabulation System'/>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'><Icon name='write'/>事前入力</Header>
            <Header.Subheader style={subheaderStyle}>参加団体の情報などを入力します。</Header.Subheader>
            <Button fluid style={buttonStyle} onClick={() => store.dispatch(push('/addProject'))}>団体・企画の入力</Button>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'><Icon name='check'/>当日入力</Header>
            <Header.Subheader style={subheaderStyle}>マークシートの読込・来場者投票の入力を行います。</Header.Subheader>
            <Button fluid style={buttonStyle} onClick={() => store.dispatch(push('/importCsv'))}>マークシート読み込みデータ(CSV)入力</Button>
            <Button fluid style={buttonStyle} onClick={() => store.dispatch(push('/inputVotes'))}>一般来場者・後夜祭票入力</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'><Icon name='settings'/>オプション</Header>
            <Header.Subheader style={subheaderStyle}>無効団体などの指定を行います。</Header.Subheader>
            <Button fluid style={buttonStyle}>集計対象外団体の指定</Button>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'><Icon name='bar chart'/>集計結果</Header>
            <Header.Subheader style={subheaderStyle} >集計結果の確認を行います。</Header.Subheader>
            <Button fluid style={buttonStyle} onClick={() => { store.dispatch(push('/result'))}}>集計処理・結果の確認</Button>
            <Button fluid style={buttonStyle}>統計情報の確認</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{
        textAlign: 'right',
        marginTop: '2em'
      }}>
        <Button primary>プロジェクトの保存</Button>
      </div>
    </div>
  )
}

export default Start
