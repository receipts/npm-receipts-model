const ResultPrizeWinnerResponse = function ResultPrizeWinnerResponse(code, name, type) {
  this.code = code;
  this.name = name;
  this.type = type;
};

const ResultPrizeWinnerResponseBuilder = function ResultPrizeWinnerResponseBuilder() {
  this.code = null;
  this.name = null;
  this.type = null;

  const self = this;

  this.withCode = function withCode(code) {
    self.code = code;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withType = function withType(type) {
    self.type = type;
    return self;
  };


  this.build = function build() {
    return new ResultPrizeWinnerResponse(
      self.code,
      self.name,
      self.type
    );
  };

};

module.exports = exports = {
  ResultPrizeWinnerResponse: ResultPrizeWinnerResponse,
  ResultPrizeWinnerResponseBuilder: ResultPrizeWinnerResponseBuilder
};
