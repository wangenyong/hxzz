/**
 * @flow
 */

'use strict'

import { connect } from 'react-redux';
import NewsDetailView from '../components/NewsDetailView';
import { fetchNewsDetail } from '../actions';

const mapStateToProps = (state) => {
  return {
    detail: state.info.detail.newsDetail,
    username: state.user.username,
    isFetching: state.info.detail.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsDetail: (id: string, username: string) => {
      dispatch(fetchNewsDetail(id, username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailView)
