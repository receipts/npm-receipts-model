const util = require('util');

class InvalidPurchaseOrderNumberError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidPurchaseOrderNumberError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidPurchaseOrderNumberError = InvalidPurchaseOrderNumberError;