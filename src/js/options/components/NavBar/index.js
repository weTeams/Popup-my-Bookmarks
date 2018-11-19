// @flow strict

import {connect} from 'react-redux'

import {type RootState, navigationCreators} from '../../reduxs'
import NavBar from './NavBar'

const mapDispatchToProps = {
  switchNavModule: navigationCreators.switchNavModule
}

const mapStateToProps = (state: RootState) => ({
  selectedNavModule: state.navigation.selectedNavModule
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
