/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import SettingView from '../components/SettingView';
import { loggedOut, switchTab } from '../actions';

const mapStateToProps = (state) => {
  return {
    realname: state.user.realname,
    username: state.user.username,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(loggedOut())
    },
    switchHome: () => {
      dispatch(switchTab('post'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingView)
