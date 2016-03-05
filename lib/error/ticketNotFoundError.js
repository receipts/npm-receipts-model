var util = require('util');

var TicketNotFoundError = function TicketNotFoundError(message, userMessage) {
  Error.call(this);
  this.name = 'TicketNotFoundError';
  this.message = message;
  this.userMessage = userMessage;
};

util.inherits(TicketNotFoundError, Error);

module.exports.TicketNotFoundError = TicketNotFoundError;