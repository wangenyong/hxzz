/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import MapsView from '../components/MapsView';
//import { onUserLoginSuccess, onUserLoginError } from '../actions';

const mapStateToProps = (state) => {
  return {
    annotations: state.map.annotations
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoginSuccess: (json: Object) => {
//       dispatch(onUserLoginSuccess(json));
//     },
//     onLoginError: () => {
//       dispatch(onUserLoginError());
//     }
//   }
// }

export default connect(mapStateToProps)(MapsView)
