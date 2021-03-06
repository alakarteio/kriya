import { connect } from 'react-redux'
import { getKeys } from './redux'
import Component from './tabs'

export const mapStateToProps = (state, ownProps) => {
  if (ownProps.children) return {}

  return {
    tabs: getKeys(state),
  }
}

export default connect(mapStateToProps)(Component)
