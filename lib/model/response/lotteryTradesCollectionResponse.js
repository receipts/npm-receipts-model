class LotteryTradesCollectionResponse {
  constructor(total, trades) {
    this.total = total;
    this.trades = trades;
  }
}

class LotteryTradesCollectionResponseBuilder {
  constructor() {
    this.total = null;
    this.trades = null;
  }

  withTotal(total) {
    this.total = total;
    return this;
  }

  withTrades(trades) {
    this.trades = trades;
    return this;
  }

  build() {
    return new LotteryTradesCollectionResponse(
      this.total,
      this.trades
    );
  }
}

module.exports = exports = {
  LotteryTradesCollectionResponse: LotteryTradesCollectionResponse,
  LotteryTradesCollectionResponseBuilder: LotteryTradesCollectionResponseBuilder
};
