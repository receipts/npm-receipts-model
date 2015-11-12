var ResultResponse = function ResultResponse(name, date, status, prizes) {
  this.name = name;
  this.date = date;
  this.status = status;
  this.prizes = prizes;
};

var ResultResponseBuilder = function ResultResponseBuilder() {
  this.name = null;
  this.date = null;
  this.status = null;
  this.prizes = null;

  var self = this;

  this.withName = function withName(name) {
    self.name = name;
    return self;
  };

  this.withDate = function withDate(date) {
    self.date = date;
    return self;
  };

  this.withStatus = function withStatus(status) {
    self.status = status;
    return self;
  };

  this.withPrizes = function withPrizes(prizes) {
    self.prizes = prizes;
    return self;
  };


  this.build = function build() {
    return new ResultResponse(
     self.name, 
     self.date, 
     self.status, 
     self.prizes
    );
  };

};

module.exports = exports = {
  ResultResponse: ResultResponse,
  ResultResponseBuilder: ResultResponseBuilder
};
