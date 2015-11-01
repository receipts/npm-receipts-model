var util = require('util');

var UnauthorizedUserError = function UnauthorizedUserError(message) {
  Error.call(this);
  this.name = 'UnauthorizedUserError';
  this.message = message;
};

util.inherits(UnauthorizedUserError, Error);

module.exports.UnauthorizedUserError = UnauthorizedUserError;