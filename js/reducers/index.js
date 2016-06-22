/**
 * @flow
 */

'use strict'

import { combineReducers } from 'redux';
import userReducer from './user';
import navigationReducer from './navigation';

const reducers = combineReducers({
  user: userReducer,
  navigation: navigationReducer
})

export default reducers
