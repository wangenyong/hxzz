/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoMixView from '../components/InfoMixView';
import { onSecondInfoReceived, onSecondNewsListReceived } from '../actions';
import { ListView } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.info.second.data.concat(state.info.second.newsList)),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInfoReceived: (json: Array<Object>) => {
      dispatch(onSecondInfoReceived(json))
    },
    onNewsListReceived: (json: Array<Object> ) => {
      dispatch(onSecondNewsListReceived(json))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoMixView)
