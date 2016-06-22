/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  root: Object
}

const initialState = {
  root: {
    data: []
  }
};

export default function info(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ROOT_INFO_RECEIVED':
      return {
        ...state,
        root: action.json
      }
    default:
      return state
  }
}
