var util = require('util');

var InvalidTaxRegistrationNumberError = function InvalidTaxRegistrationNumberError(message, userMessage, field) {
  Error.call(this);
  this.name = 'InvalidTaxRegistrationNumberError';
  this.message = message;
  this.userMessage = userMessage;
  this.field = field;
};

util.inherits(InvalidTaxRegistrationNumberError, Error);

module.exports.InvalidTaxRegistrationNumberError = InvalidTaxRegistrationNumberError;