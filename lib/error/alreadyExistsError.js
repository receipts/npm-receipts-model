var util = require('util');

var AlreadyExistsError = function AlreadyExistsError(message, userMessage) {
  Error.call(this);
  this.name = 'AlreadyExistsError';
  this.message = message;
  this.userMessage = userMessage;
};

util.inherits(AlreadyExistsError, Error);

module.exports.AlreadyExistsError = AlreadyExistsError;