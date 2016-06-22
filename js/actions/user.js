/**
 * @flow
 */
'use strict';

import type {Action} from './types';
import type { UserState } from '../reducers/user';
// User action creators
export function onUserLoginSuccess(user: UserState): Action {
  return {
    type: 'USER_LOGIN_SUCCESS',
    user
  }
}

export function onUserLoginError(): Action {
  return {
    type: 'USER_LOGIN_ERROR'
  }
}

export function loggedOut(): Action {
  return {
    type: 'LOGGED_OUT'
  }
}
