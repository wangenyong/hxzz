/**
 * @flow
 */

'use strict'

import { combineReducers } from 'redux';
import userReducer from './user';
import navigationReducer from './navigation';
import infoReducer from './info';

const reducers = combineReducers({
  user: userReducer,
  navigation: navigationReducer,
  info: infoReducer
})

export default reducers
