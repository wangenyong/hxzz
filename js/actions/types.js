/**
 * @flow
 */

'use strict';

export type Action =
    { type: 'USER_LOGIN_SUCCESS', json: Object }
  | { type: 'USER_LOGIN_ERROR' }
  | { type: 'LOGGED_OUT' }
  | { type: 'SWITCH_TAB', tab: 'post' | 'info' | 'setting' }
  | { type: 'REQUEST_ROOT_INFO' }
  | { type: 'REQUEST_SECOND_INFO' }
  | { type: 'REQUEST_THIRD_NEWS' }
  | { type: 'REQUEST_NEWS_DETAIL' }
  | { type: 'ROOT_INFO_RECEIVED', json: Array<Object> }
  | { type: 'SECOND_INFO_RECEIVED', json: Array<Object> }
  | { type: 'SECOND_NEWSLIST_RECEIVED', json: Array<Object> }
  | { type: 'THIRD_NEWSLIST_RECEIVED', json: Array<Object> }
  | { type: 'NEWS_DETAIL_RECEIVED', json: string }
  ;
