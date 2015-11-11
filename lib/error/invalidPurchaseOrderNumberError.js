var util = require('util');

var InvalidPurchaseOrderNumberError = function InvalidPurchaseOrderNumberError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidPurchaseOrderNumberError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidPurchaseOrderNumberError, Error);

module.exports.InvalidPurchaseOrderNumberError = InvalidPurchaseOrderNumberError;