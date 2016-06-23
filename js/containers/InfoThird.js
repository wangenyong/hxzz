/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import InfoThirdView from '../components/InfoThirdView';
import { fetchThirdNews } from '../actions';
import { ListView } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.info.third.newsList),
    username: state.user.username,
    isFetching: state.info.third.isFetching,
    newsCount: state.info.third.newsList.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchThirdNews: (id: string, username: string) => {
      dispatch(fetchThirdNews(id, username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoThirdView)
