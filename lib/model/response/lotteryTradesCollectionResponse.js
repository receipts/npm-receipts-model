var LotteryTradesCollectionResponse = function LotteryTradesCollectionResponse(total, trades) {
  this.total = total;
  this.trades = trades;
};

var LotteryTradesCollectionResponseBuilder = function LotteryTradesCollectionResponseBuilder() {
  this.total = null;
  this.trades = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withTrades = function withTrades(trades) {
    self.trades = trades;
    return self;
  };


  this.build = function build() {
    return new LotteryTradesCollectionResponse(
     self.total, 
     self.trades
    );
  };

};

module.exports = exports = {
  LotteryTradesCollectionResponse: LotteryTradesCollectionResponse,
  LotteryTradesCollectionResponseBuilder: LotteryTradesCollectionResponseBuilder
};
