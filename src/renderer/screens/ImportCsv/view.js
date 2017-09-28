import React from 'react'
import {
  Header,
  Button
} from 'semantic-ui-react'
import ReturnMenuButton from '../../component/returnMenu'

const ImportCsv = () => {
  return (
    <div>
      <Header content='マークシート読み込みデータ入力' subheader='マークシート読取機の出力したCSVを読み込みます'/>
      <div>
        <Button>ファイルを選択</Button>
        <span>/Users/uutarou/electron-api-demos</span>
        <Button
          primary
          disable
          disabled
          floated='right'>マークシートを読み込む</Button>
      </div>
      <ReturnMenuButton/>
    </div>
  )
}

export default ImportCsv
