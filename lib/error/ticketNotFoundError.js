

class TicketNotFoundError extends Error {
  constructor(message, userMessage) {
    super();
    this.name = 'TicketNotFoundError';
    this.message = message;
    this.userMessage = userMessage;
  }
}

module.exports.TicketNotFoundError = TicketNotFoundError;