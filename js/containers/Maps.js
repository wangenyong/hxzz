/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import MapsView from '../components/MapsView';
import { sendGPS } from '../actions';

const mapStateToProps = (state) => {
  return {
    annotations: state.map.annotations,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGpsSend: (username: string, longitude: number, latitude: number) => {
      dispatch(sendGPS(username, longitude, latitude));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapsView)
