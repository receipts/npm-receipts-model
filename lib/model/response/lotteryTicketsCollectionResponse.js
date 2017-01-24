class LotteryTicketsCollectionResponse {
  constructor(total, tickets) {
    this.total = total;
    this.tickets = tickets;
  }
}

class LotteryTicketsCollectionResponseBuilder {
  constructor() {
    this.total = null;
    this.tickets = null;
  }

  withTotal(total) {
    this.total = total;
    return this;
  }

  withTickets(tickets) {
    this.tickets = tickets;
    return this;
  }

  build() {
    return new LotteryTicketsCollectionResponse(
      this.total,
      this.tickets
    );
  }
}

module.exports = exports = {
  LotteryTicketsCollectionResponse: LotteryTicketsCollectionResponse,
  LotteryTicketsCollectionResponseBuilder: LotteryTicketsCollectionResponseBuilder
};
