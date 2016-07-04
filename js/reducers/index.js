/**
 * @flow
 */

'use strict'

import { combineReducers } from 'redux';
import userReducer from './user';
import navigationReducer from './navigation';
import infoReducer from './info';
import mapReducer from './map';

const reducers = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  info: infoReducer,
  map: mapReducer
})

export default reducers
