const util = require('util');

class InvalidTaxRegistrationNumberError extends Error {
  constructor(message, userMessage, field) {
    super();
    this.name = 'InvalidTaxRegistrationNumberError';
    this.message = message;
    this.userMessage = userMessage;
    this.field = field;
  }
}

module.exports.InvalidTaxRegistrationNumberError = InvalidTaxRegistrationNumberError;