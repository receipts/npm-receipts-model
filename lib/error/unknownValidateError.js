var util = require('util');

var UnknownValidateError = function UnknownValidateError(message, userMessage) {
  Error.call(this);
  this.name = 'UnknownValidateError';
  this.message = message;
  this.userMessage = userMessage;
};

util.inherits(UnknownValidateError, Error);

module.exports.UnknownValidateError = UnknownValidateError;