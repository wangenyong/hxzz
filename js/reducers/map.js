/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  annotations: Array<Object>
}

const initialState = {
  annotations: [
  ]
};

export default function map(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'LOCATION_RECEIVED':
      return {
        ...state,
        annotations: action.json
      }
    default:
      return state
  }
}
