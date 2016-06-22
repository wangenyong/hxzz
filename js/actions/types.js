/**
 * @flow
 */

'use strict';

export type Action =
    { type: 'USER_LOGIN_SUCCESS', id: string }
  | { type: 'USER_LOGIN_ERROR' }
  | { type: 'LOGGED_OUT' }
  | { type: 'SWITCH_TAB', tab: 'post' | 'info' | 'setting' }
  ;
