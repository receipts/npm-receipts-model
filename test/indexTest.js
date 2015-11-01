var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export ServiceUnavailableError', function (done) {

    var ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export UnauthorizedUserError', function (done) {

    var UnauthorizedUserError = index.error.UnauthorizedUserError;
    should.exist(UnauthorizedUserError);
    done();
  });

  it('should export agreementsRequest', function (done) {

    var agreementsRequest = index.model.agreementsRequest;
    should.exist(agreementsRequest);
    done();
  });

  it('should export amountResponse', function (done) {

    var amountResponse = index.model.amountResponse;
    should.exist(amountResponse);
    done();
  });

  it('should export lotteryTicketsCollectionResponse', function (done) {

    var lotteryTicketsCollectionResponse = index.model.lotteryTicketsCollectionResponse;
    should.exist(lotteryTicketsCollectionResponse);
    done();
  });

  it('should export ticketRequest', function (done) {

    var ticketRequest = index.model.ticketRequest;
    should.exist(ticketRequest);
    done();
  });

  it('should export ticketResponse', function (done) {

    var ticketResponse = index.model.ticketResponse;
    should.exist(ticketResponse);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});