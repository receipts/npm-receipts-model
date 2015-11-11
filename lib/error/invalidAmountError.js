var util = require('util');

var InvalidAmountError = function InvalidAmountError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidAmountError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidAmountError, Error);

module.exports.InvalidAmountError = InvalidAmountError;