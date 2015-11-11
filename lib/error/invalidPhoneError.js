var util = require('util');

var InvalidPhoneError = function InvalidPhoneError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidPhoneError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidPhoneError, Error);

module.exports.InvalidPhoneError = InvalidPhoneError;