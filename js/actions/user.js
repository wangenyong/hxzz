/**
 * @flow
 */
'use strict';

import type {Action} from './types';
// User action creators
export function onUserLoginSuccess(json: Object): Action {
  return {
    type: 'USER_LOGIN_SUCCESS',
    json
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
