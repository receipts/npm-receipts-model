const util = require('util');

class InvalidPointOfSaleError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidPointOfSaleError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidPointOfSaleError = InvalidPointOfSaleError;