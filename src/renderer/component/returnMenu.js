import React from 'react'
import store from '../store'
import { push } from 'react-router-redux'
import { Button } from 'semantic-ui-react'

const ReturnMenuButton = (isDisable = false) => {
  if (isDisable) {
    return (
      <Button
        style={{marginTop: '0.25em'}}
        primary
        onClick={() => store.dispatch(push('/top'))}
      >メニューに戻る</Button>
    )
  } else {
    return (
      <Button
        style={{marginTop: '0.25em'}}
        primary
        onClick={() => store.dispatch(push('/top'))}
        disabled
      >メニューに戻る</Button>
    )
  }
}

export default ReturnMenuButton
