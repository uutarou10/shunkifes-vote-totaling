import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addPresentation,
  getPresentations
} from '../../modules/presentations'

const mapStateToProps = (state) => {
  return {
    presentations: getPresentations(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPresentation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
