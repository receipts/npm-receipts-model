const TradeResponse = function TradeResponse(id, name) {
  this.id = id;
  this.name = name;
};

const TradeResponseBuilder = function TradeResponseBuilder() {
  this.id = null;
  this.name = null;

  const self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };


  this.build = function build() {
    return new TradeResponse(
     self.id, 
     self.name
    );
  };

};

module.exports = exports = {
  TradeResponse: TradeResponse,
  TradeResponseBuilder: TradeResponseBuilder
};
