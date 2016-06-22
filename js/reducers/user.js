/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  hasSkippedLogin: boolean;
  id: ?string;
  name: ?string;
}

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  id: null,
  name: null
};

export default function user(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        id: action.id
      }
    case 'USER_LOGIN_ERROR':
      return initialState
    case 'LOGGED_OUT':
      return initialState
    default:
      return state
  }
}
