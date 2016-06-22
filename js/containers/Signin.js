/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import SigninView from '../components/SigninView';
import { onUserLoginSuccess, onUserLoginError } from '../actions';

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (json: Object) => {
      dispatch(onUserLoginSuccess(json));
    },
    onLoginError: () => {
      dispatch(onUserLoginError());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninView)
