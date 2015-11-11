var util = require('util');

var InvalidDateError = function InvalidDateError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidDateError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidDateError, Error);

module.exports.InvalidDateError = InvalidDateError;