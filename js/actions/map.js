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
        var array = [];
        json.gps.map((location, index) => {
          if (location.name !== username) {
            array.push({
              longitude: location.gps[0],
              latitude: location.gps[1],
              title: location.name
            })
          }
        });
        dispatch(locationsReceived(array))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

export function locationsReceived(json: Array<Object>): Action {
  return {
    type: 'LOCATION_RECEIVED',
    json
  }
}
