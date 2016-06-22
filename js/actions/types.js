/**
 * @flow
 */

'use strict';
import type { UserState } from '../reducers/user';

export type Action =
    { type: 'USER_LOGIN_SUCCESS', user: UserState }
  | { type: 'USER_LOGIN_ERROR' }
  | { type: 'LOGGED_OUT' }
  | { type: 'SWITCH_TAB', tab: 'post' | 'info' | 'setting' }
  ;
