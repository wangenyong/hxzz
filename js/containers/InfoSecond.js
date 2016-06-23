/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoSecondView from '../components/InfoSecondView';
import { onSecondInfoReceived, onSecondNewsListReceived } from '../actions';
import { ListView } from 'react-native';

const infoDataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const newsDataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    infoDataSource: infoDataSource.cloneWithRows(state.info.second.data),
    newsDataSource: newsDataSource.cloneWithRows(state.info.second.newsList)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInfoReceived: (json: Object) => {
      dispatch(onSecondInfoReceived(json))
    },
    onNewsListReceived: (json: Object) => {
      dispatch(onSecondNewsListReceived(json))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoSecondView)
