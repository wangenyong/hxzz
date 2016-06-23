/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoView from '../components/InfoView';
import { onRootInfoReceived } from '../actions';
import { ListView } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.info.root.data),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRootInfoReceived: (json: Array<Object>) => {
      dispatch(onRootInfoReceived(json))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoView)
