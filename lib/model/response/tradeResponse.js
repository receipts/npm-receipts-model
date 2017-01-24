class TradeResponse {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class TradeResponseBuilder {
  constructor() {
    this.id = null;
    this.name = null;
  }

  withId(id) {
    this.id = id;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  build() {
    return new TradeResponse(
      this.id,
      this.name
    );
  }
}

module.exports = exports = {
  TradeResponse: TradeResponse,
  TradeResponseBuilder: TradeResponseBuilder
};
