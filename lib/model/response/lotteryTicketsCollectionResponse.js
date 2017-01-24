const LotteryTicketsCollectionResponse = function LotteryTicketsCollectionResponse(total, tickets) {
  this.total = total;
  this.tickets = tickets;
};

const LotteryTicketsCollectionResponseBuilder = function LotteryTicketsCollectionResponseBuilder() {
  this.total = null;
  this.tickets = null;

  const self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withTickets = function withTickets(tickets) {
    self.tickets = tickets;
    return self;
  };


  this.build = function build() {
    return new LotteryTicketsCollectionResponse(
     self.total, 
     self.tickets
    );
  };

};

module.exports = exports = {
  LotteryTicketsCollectionResponse: LotteryTicketsCollectionResponse,
  LotteryTicketsCollectionResponseBuilder: LotteryTicketsCollectionResponseBuilder
};
