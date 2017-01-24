class LotteryResultsCollectionResponse {
  constructor(total, results) {
    this.total = total;
    this.results = results;
  }
}

class LotteryResultsCollectionResponseBuilder {
  constructor() {
    this.total = null;
    this.results = null;
  }

  withTotal(total) {
    this.total = total;
    return this;
  }

  withResults(results) {
    this.results = results;
    return this;
  }

  build() {
    return new LotteryResultsCollectionResponse(
      this.total,
      this.results
    );
  }
}

module.exports = exports = {
  LotteryResultsCollectionResponse: LotteryResultsCollectionResponse,
  LotteryResultsCollectionResponseBuilder: LotteryResultsCollectionResponseBuilder
};
