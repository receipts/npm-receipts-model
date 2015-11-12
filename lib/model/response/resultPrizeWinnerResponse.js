var ResultPrizeWinnerResponse = function ResultPrizeWinnerResponse(code) {
  this.code = code;
};

var ResultPrizeWinnerResponseBuilder = function ResultPrizeWinnerResponseBuilder() {
  this.code = null;

  var self = this;

  this.withCode = function withCode(code) {
    self.code = code;
    return self;
  };


  this.build = function build() {
    return new ResultPrizeWinnerResponse(
     self.code
    );
  };

};

module.exports = exports = {
  ResultPrizeWinnerResponse: ResultPrizeWinnerResponse,
  ResultPrizeWinnerResponseBuilder: ResultPrizeWinnerResponseBuilder
};
