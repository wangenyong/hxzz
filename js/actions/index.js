/**
 * @flow
 */

'use strict';

const userActions = require('./user');
const navigationActions = require('./navigation');
const infoActions = require('./info');

module.exports = {
  ...userActions,
  ...navigationActions,
  ...infoActions
}
