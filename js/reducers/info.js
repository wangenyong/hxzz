/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  root: Object,
  second: Object
}

const initialState = {
  root: {
    data: []
  },
  second: {
    data: [],
    newsList: []
  }
};

export default function info(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ROOT_INFO_RECEIVED':
      return {
        ...state,
        root: action.json
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
          newsList: action.json
        }
      }
    default:
      return state
  }
}
