/**
 * @flow
 */
'use strict';

import type {Action} from './types';
// Info action creators

export function requestRootInfo(): Action {
  return {
    type: 'REQUEST_ROOT_INFO',
  }
}

export function fetchRootInfo() {
  return (dispatch: any) => {
    dispatch(requestRootInfo())
    return fetch('http://220.165.8.15:5000/get_class_by_id/0')
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        dispatch(onRootInfoReceived(json.data))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

export function onRootInfoReceived(json: Array<Object>): Action {
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
