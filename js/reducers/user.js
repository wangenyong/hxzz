/**
 * @flow
 */

'use strict'

import type {Action} from '../actions/types';

type State = {
  loginstatus: boolean;
  dep_id: ?string;
  department: ?string;
  realname: ?string;
  role: ?string;
  username: ?string;
}

const initialState = {
  loginstatus: false,
  dep_id: null,
  department: null,
  realname: null,
  role: null,
  username: null
};

export default function user(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return action.json
    case 'USER_LOGIN_ERROR':
      return initialState
    case 'LOGGED_OUT':
      return initialState
    default:
      return state
  }
}
