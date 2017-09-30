import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPresentations } from '../../modules/presentations'
import { updateVisitorVote } from '../../modules/votes'

const mapStateToProps = (state) => {
  return {
    presentations: getPresentations(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateVisitorVote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)