var util = require('util');

var ServiceUnavailableError = function ServiceUnavailableError(message, userMessage) {
  Error.call(this);
  this.name = 'ServiceUnavailableError';
  this.message = message;
  this.userMessage = userMessage;
};

util.inherits(ServiceUnavailableError, Error);

module.exports.ServiceUnavailableError = ServiceUnavailableError;