class ResultResponse {
  constructor(name, date, status, prizes) {
    this.name = name;
    this.date = date;
    this.status = status;
    this.prizes = prizes;
  }
}

class ResultResponseBuilder {
  constructor() {
    this.name = null;
    this.date = null;
    this.status = null;
    this.prizes = null;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  withDate(date) {
    this.date = date;
    return this;
  }

  withStatus(status) {
    this.status = status;
    return this;
  }

  withPrizes(prizes) {
    this.prizes = prizes;
    return this;
  }

  build() {
    return new ResultResponse(
      this.name,
      this.date,
      this.status,
      this.prizes
    );
  }
}

module.exports = exports = {
  ResultResponse: ResultResponse,
  ResultResponseBuilder: ResultResponseBuilder
};
