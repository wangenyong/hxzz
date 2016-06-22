/**
 * @flow
 */

'use strict';

const userActions = require('./user');
const navigationActions = require('./navigation');

module.exports = {
  ...userActions,
  ...navigationActions,
}
