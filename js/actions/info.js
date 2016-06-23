/**
 * @flow
 */
'use strict';

import type {Action} from './types';
// Info action creators
export function onRootInfoReceived(json: Object): Action {
  return {
    type: 'ROOT_INFO_RECEIVED',
    json
  }
}

export function onSecondInfoReceived(json: Array<Object>): Action {
  return {
    type: 'SECOND_INFO_RECEIVED',
    json
  }
}

export function onSecondNewsListReceived(json: Array<Object>): Action {
  return {
    type: 'SECOND_NEWSLIST_RECEIVED',
    json
  }
}
