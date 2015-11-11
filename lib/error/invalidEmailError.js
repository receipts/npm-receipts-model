var util = require('util');

var InvalidEmailError = function InvalidEmailError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidEmailError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidEmailError, Error);

module.exports.InvalidEmailError = InvalidEmailError;