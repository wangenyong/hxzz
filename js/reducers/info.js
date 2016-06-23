/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  root: Object,
  second: Object,
  third: Object,
  detail: Object
}

const initialState = {
  root: {
    isFetching: false,
    data: []
  },
  second: {
    isFetching: false,
    data: [],
    newsList: []
  },
  third: {
    isFetching: false,
    newsList: []
  },
  detail: {
    isFetching: false,
    newsDetail: ''
  }
};

export default function info(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'REQUEST_ROOT_INFO':
      return {
        ...state,
        root: {
          ...state.root,
          isFetching: true
        }
      }
    case 'REQUEST_SECOND_INFO':
      return {
        ...state,
        second: {
          ...state.second,
          isFetching: true
        }
      }
    case 'REQUEST_THIRD_NEWS':
      return {
        ...state,
        third: {
          ...state.third,
          isFetching: true
        }
      }
    case 'REQUEST_NEWS_DETAIL':
      return {
        ...state,
        detail: {
          ...state.detail,
          isFetching: true
        }
      }
    case 'ROOT_INFO_RECEIVED':
      return {
        ...state,
        root: {
          ...state.root,
          data: action.json,
          isFetching: false
        }
      }
    case 'SECOND_INFO_RECEIVED':
      return {
        ...state,
        second: {
          ...state.second,
          data: action.json
        }
      }
    case 'SECOND_NEWSLIST_RECEIVED':
      return {
        ...state,
        second: {
          ...state.second,
          newsList: action.json,
          isFetching: false
        }
      }
    case 'THIRD_NEWSLIST_RECEIVED':
      return {
        ...state,
        third: {
          ...state.third,
          newsList: action.json,
          isFetching: false
        }
      }
    case 'NEWS_DETAIL_RECEIVED':
      return {
        ...state,
        detail: {
          ...state.detail,
          newsDetail: action.json,
          isFetching: false
        }
      }
    default:
      return state
  }
}
