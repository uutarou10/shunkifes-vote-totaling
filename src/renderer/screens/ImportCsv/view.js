import React from 'react'
import {
  Header,
  Button
} from 'semantic-ui-react'
import ReturnMenuButton from '../../component/returnMenu'
import fileChooser from '../../events/fileChooser'
import {
  compose,
  withState
} from 'recompose'

const enhance = compose(
  withState('filePath', 'setFilePath', '')
)

const ImportCsv = (props) => {
  const {
    filePath,
    setFilePath
  } = props

  return (
    <div>
      <Header content='マークシート読み込みデータ入力' subheader='マークシート読取機の出力したCSVを読み込みます'/>
      <div>
        <Button
          onClick={() => {
            setFilePath(fileChooser.open())
          }}
        >ファイルを選択</Button>
        <span>{filePath}</span>
        <Button
          primary
          disabled={filePath === ''}
          floated='right'
          onClick={() => {
            console.log('hoge')
          }}
        >マークシートを読み込む</Button>
      </div>
      <ReturnMenuButton/>
    </div>
  )
}

export default enhance(ImportCsv)
