var util = require('util');

var InvalidPointOfSaleError = function InvalidPointOfSaleError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidPointOfSaleError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidPointOfSaleError, Error);

module.exports.InvalidPointOfSaleError = InvalidPointOfSaleError;