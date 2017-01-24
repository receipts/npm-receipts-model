class ResultPrizeWinnerResponse {
  constructor(code, name, type) {
    this.code = code;
    this.name = name;
    this.type = type;
  }
}

class ResultPrizeWinnerResponseBuilder {
  constructor() {
    this.code = null;
    this.name = null;
    this.type = null;
  }

  withCode(code) {
    this.code = code;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withType(type) {
    this.type = type;
    return this;
  }

  build() {
    return new ResultPrizeWinnerResponse(
      this.code,
      this.name,
      this.type
    );
  }
}

module.exports = exports = {
  ResultPrizeWinnerResponse: ResultPrizeWinnerResponse,
  ResultPrizeWinnerResponseBuilder: ResultPrizeWinnerResponseBuilder
};
