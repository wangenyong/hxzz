/**
 * @flow
 */

'use strict';

const userActions = require('./user');
const navigationActions = require('./navigation');
const infoActions = require('./info');
const mapActions = require('./map');

module.exports = {
  ...userActions,
  ...navigationActions,
  ...infoActions,
  ...mapActions
}
