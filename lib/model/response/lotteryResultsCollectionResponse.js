var LotteryResultsCollectionResponse = function LotteryResultsCollectionResponse(total, results) {
  this.total = total;
  this.results = results;
};

var LotteryResultsCollectionResponseBuilder = function LotteryResultsCollectionResponseBuilder() {
  this.total = null;
  this.results = null;

  var self = this;

  this.withTotal = function withTotal(total) {
    self.total = total;
    return self;
  };

  this.withResults = function withResults(results) {
    self.results = results;
    return self;
  };


  this.build = function build() {
    return new LotteryResultsCollectionResponse(
     self.total, 
     self.results
    );
  };

};

module.exports = exports = {
  LotteryResultsCollectionResponse: LotteryResultsCollectionResponse,
  LotteryResultsCollectionResponseBuilder: LotteryResultsCollectionResponseBuilder
};
