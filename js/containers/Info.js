/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoView from '../components/InfoView';
import { fetchRootInfo } from '../actions';
import { ListView } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.info.root.data),
    isFetching: state.info.root.isFetching,
    infoCount: state.info.root.data.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRootInfo: () => {
      dispatch(fetchRootInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoView)
