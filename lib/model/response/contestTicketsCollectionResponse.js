var ContestTicketsCollectionResponse = function ContestTicketsCollectionResponse(total, tickets) {
  this.total = total;
  this.tickets = tickets;
};

var ContestTicketsCollectionResponseBuilder = function ContestTicketsCollectionResponseBuilder() {
  this.total = null;
  this.tickets = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withTickets = function withTickets(tickets) {
    self.tickets = tickets;
    return self;
  };


  this.build = function build() {
    return new ContestTicketsCollectionResponse(
     self.total, 
     self.tickets
    );
  };

};

module.exports = exports = {
  ContestTicketsCollectionResponse: ContestTicketsCollectionResponse,
  ContestTicketsCollectionResponseBuilder: ContestTicketsCollectionResponseBuilder
};
