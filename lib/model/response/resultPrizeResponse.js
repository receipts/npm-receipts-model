class ResultPrizeResponse {
  constructor(name, winners) {
    this.name = name;
    this.winners = winners;
  }
}

class ResultPrizeResponseBuilder {
  constructor() {
    this.name = null;
    this.winners = null;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withWinners(winners) {
    this.winners = winners;
    return this;
  }

  build() {
    return new ResultPrizeResponse(
      this.name,
      this.winners
    );
  }
}

module.exports = exports = {
  ResultPrizeResponse: ResultPrizeResponse,
  ResultPrizeResponseBuilder: ResultPrizeResponseBuilder
};
