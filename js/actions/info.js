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
