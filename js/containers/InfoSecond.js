/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoMixView from '../components/InfoMixView';
import { fetchSecondInfo } from '../actions';
import { ListView } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.info.second.data.concat(state.info.second.newsList)),
    username: state.user.username,
    isFetching: state.info.second.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSecondInfo: (id: string, username: string) => {
      dispatch(fetchSecondInfo(id, username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMixView)
