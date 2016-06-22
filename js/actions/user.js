/**
 * @flow
 */
'use strict';

import type {Action} from './types';

// User action creators
export function onUserLoginSuccess(id: string): Action {
  return {
    type: 'USER_LOGIN_SUCCESS',
    id: id
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
