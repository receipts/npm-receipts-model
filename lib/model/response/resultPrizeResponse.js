var ResultPrizeResponse = function ResultPrizeResponse(name, winners) {
  this.name = name;
  this.winners = winners;
};

var ResultPrizeResponseBuilder = function ResultPrizeResponseBuilder() {
  this.name = null;
  this.winners = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withWinners = function withWinners(winners) {
    self.winners = winners;
    return self;
  };


  this.build = function build() {
    return new ResultPrizeResponse(
     self.name, 
     self.winners
    );
  };

};

module.exports = exports = {
  ResultPrizeResponse: ResultPrizeResponse,
  ResultPrizeResponseBuilder: ResultPrizeResponseBuilder
};
