var util = require('util');

var InvalidTradeError = function InvalidTradeError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidTradeError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidTradeError, Error);

module.exports.InvalidTradeError = InvalidTradeError;