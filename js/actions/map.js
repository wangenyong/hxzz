/**
 * @flow
 */
'use strict';

import type {Action} from './types';
// Map action creators
export function sendGPS(username: string, longitude: number, latitude: number): Action {
  return (dispatch: any) => {
    return fetch('http://www.ynhxzz.cn:5000/update_gps/' + username + '/' + longitude + '/' + latitude)
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        console.log(json);
        dispatch(locationsReceived(json))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

export function locationsReceived(json: Object): Action {
  return {
    type: 'LOCATION_RECEIVED',
    json
  }
}
