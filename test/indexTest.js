var chai = require('chai');
var should = chai.should();
var index = require('../index');

describe('index test', function () {

  it('should export TicketNotFoundError', function (done) {

    var TicketNotFoundError = index.error.TicketNotFoundError;
    should.exist(TicketNotFoundError);
    done();
  });

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

  it('should export InvalidEmailError', function (done) {

    var InvalidEmailError = index.error.InvalidEmailError;
    should.exist(InvalidEmailError);
    done();
  });

  it('should export InvalidPhoneError', function (done) {

    var InvalidPhoneError = index.error.InvalidPhoneError;
    should.exist(InvalidPhoneError);
    done();
  });

  it('should export InvalidTradeError', function (done) {

    var InvalidTradeError = index.error.InvalidTradeError;
    should.exist(InvalidTradeError);
    done();
  });

  it('should export agreementsRequest', function (done) {

    var agreementsRequest = index.model.agreementsRequest;
    should.exist(agreementsRequest);
    done();
  });

  it('should export Trade enum', function (done) {

    var Trade = index.enum.Trade;
    should.exist(Trade);
    done();
  });

  it('should export Currency enum', function (done) {

    var Currency = index.enum.Currency;
    should.exist(Currency);
    done();
  });

  it('should export ResultStatus enum', function (done) {

    var ResultStatus = index.enum.ResultStatus;
    should.exist(ResultStatus);
    done();
  });

  it('should export amountResponse', function (done) {

    var amountResponse = index.model.amountResponse;
    should.exist(amountResponse);
    done();
  });

  it('should export lotteryResultsCollectionResponse', function (done) {

    var lotteryResultsCollectionResponse = index.model.lotteryResultsCollectionResponse;
    should.exist(lotteryResultsCollectionResponse);
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

  it('should export resultPrizeResponse', function (done) {

    var resultPrizeResponse = index.model.resultPrizeResponse;
    should.exist(resultPrizeResponse);
    done();
  });

  it('should export resultPrizeWinnerResponse', function (done) {

    var resultPrizeWinnerResponse = index.model.resultPrizeWinnerResponse;
    should.exist(resultPrizeWinnerResponse);
    done();
  });

  it('should export resultResponse', function (done) {

    var resultResponse = index.model.resultResponse;
    should.exist(resultResponse);
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

  it('should export ticketDetailsResponse', function (done) {

    var ticketDetailsResponse = index.model.ticketDetailsResponse;
    should.exist(ticketDetailsResponse);
    done();
  });

  it('should export meta version', function (done) {

    var version = index.VERSION;
    should.exist(version);
    done();
  });
});