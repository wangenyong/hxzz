/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  annotations: [
    {
      latitude: number,
      longitude: number,
      title: string
    }
  ]
}

const initialState = {
  annotations: [
    {
      latitude: 24,
      longitude: 100,
      title: 'TEST'
    }
  ]
};

export default function map(state: State = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state
  }
}
