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

  it('should export AlreadyExistsError', function (done) {

    var AlreadyExistsError = index.error.AlreadyExistsError;
    should.exist(AlreadyExistsError);
    done();
  });

  it('should export UnknownValidateError', function (done) {

    var UnknownValidateError = index.error.UnknownValidateError;
    should.exist(UnknownValidateError);
    done();
  });

  it('should export InvalidPointOfSaleError', function (done) {

    var InvalidPointOfSaleError = index.error.InvalidPointOfSaleError;
    should.exist(InvalidPointOfSaleError);
    done();
  });

  it('should export InvalidPurchaseOrderNumberError', function (done) {

    var InvalidPurchaseOrderNumberError = index.error.InvalidPurchaseOrderNumberError;
    should.exist(InvalidPurchaseOrderNumberError);
    done();
  });

  it('should export InvalidDateError', function (done) {

    var InvalidDateError = index.error.InvalidDateError;
    should.exist(InvalidDateError);
    done();
  });

  it('should export InvalidAmountError', function (done) {

    var InvalidAmountError = index.error.InvalidAmountError;
    should.exist(InvalidAmountError);
    done();
  });

  it('should export InvalidTaxRegistrationNumberError', function (done) {

    var InvalidTaxRegistrationNumberError = index.error.InvalidTaxRegistrationNumberError;
    should.exist(InvalidTaxRegistrationNumberError);
    done();
  });

  it('should export agreementsRequest', function (done) {

    var agreementsRequest = index.model.agreementsRequest;
    should.exist(agreementsRequest);
    done();
  });

  it('should export Brand enum', function (done) {

    var Brand = index.enum.Brand;
    should.exist(Brand);
    done();
  });

  it('should export Currency enum', function (done) {

    var Currency = index.enum.Currency;
    should.exist(Currency);
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

  it('should export lotteryTradesCollectionResponse', function (done) {

    var lotteryTradesCollectionResponse = index.model.lotteryTradesCollectionResponse;
    should.exist(lotteryTradesCollectionResponse);
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

  it('should export tradeResponse', function (done) {

    var tradeResponse = index.model.tradeResponse;
    should.exist(tradeResponse);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});