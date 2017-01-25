const chai = require('chai');
const should = chai.should();
const index = require('../index');

describe('index test', () => {

  it('should export TicketNotFoundError', done => {

    const TicketNotFoundError = index.error.TicketNotFoundError;
    should.exist(TicketNotFoundError);
    done();
  });

  it('should export ServiceUnavailableError', done => {

    const ServiceUnavailableError = index.error.ServiceUnavailableError;
    should.exist(ServiceUnavailableError);
    done();
  });

  it('should export UnauthorizedUserError', done => {

    const UnauthorizedUserError = index.error.UnauthorizedUserError;
    should.exist(UnauthorizedUserError);
    done();
  });

  it('should export AlreadyExistsError', done => {

    const AlreadyExistsError = index.error.AlreadyExistsError;
    should.exist(AlreadyExistsError);
    done();
  });

  it('should export UnknownValidateError', done => {

    const UnknownValidateError = index.error.UnknownValidateError;
    should.exist(UnknownValidateError);
    done();
  });

  it('should export InvalidPointOfSaleError', done => {

    const InvalidPointOfSaleError = index.error.InvalidPointOfSaleError;
    should.exist(InvalidPointOfSaleError);
    done();
  });

  it('should export InvalidPurchaseOrderNumberError', done => {

    const InvalidPurchaseOrderNumberError = index.error.InvalidPurchaseOrderNumberError;
    should.exist(InvalidPurchaseOrderNumberError);
    done();
  });

  it('should export InvalidDateError', done => {

    const InvalidDateError = index.error.InvalidDateError;
    should.exist(InvalidDateError);
    done();
  });

  it('should export InvalidAmountError', done => {

    const InvalidAmountError = index.error.InvalidAmountError;
    should.exist(InvalidAmountError);
    done();
  });

  it('should export InvalidTaxRegistrationNumberError', done => {

    const InvalidTaxRegistrationNumberError = index.error.InvalidTaxRegistrationNumberError;
    should.exist(InvalidTaxRegistrationNumberError);
    done();
  });

  it('should export InvalidEmailError', done => {

    const InvalidEmailError = index.error.InvalidEmailError;
    should.exist(InvalidEmailError);
    done();
  });

  it('should export InvalidPhoneError', done => {

    const InvalidPhoneError = index.error.InvalidPhoneError;
    should.exist(InvalidPhoneError);
    done();
  });

  it('should export InvalidTradeError', done => {

    const InvalidTradeError = index.error.InvalidTradeError;
    should.exist(InvalidTradeError);
    done();
  });

  it('should export agreementsRequest', done => {

    const agreementsRequest = index.model.agreementsRequest;
    should.exist(agreementsRequest);
    done();
  });

  it('should export Trade enum', done => {

    const Trade = index.enum.Trade;
    should.exist(Trade);
    done();
  });

  it('should export Currency enum', done => {

    const Currency = index.enum.Currency;
    should.exist(Currency);
    done();
  });

  it('should export ResultStatus enum', done => {

    const ResultStatus = index.enum.ResultStatus;
    should.exist(ResultStatus);
    done();
  });

  it('should export amountResponse', done => {

    const amountResponse = index.model.amountResponse;
    should.exist(amountResponse);
    done();
  });

  it('should export lotteryResultsCollectionResponse', done => {

    const lotteryResultsCollectionResponse = index.model.lotteryResultsCollectionResponse;
    should.exist(lotteryResultsCollectionResponse);
    done();
  });

  it('should export lotteryTicketsCollectionResponse', done => {

    const lotteryTicketsCollectionResponse = index.model.lotteryTicketsCollectionResponse;
    should.exist(lotteryTicketsCollectionResponse);
    done();
  });

  it('should export lotteryTradesCollectionResponse', done => {

    const lotteryTradesCollectionResponse = index.model.lotteryTradesCollectionResponse;
    should.exist(lotteryTradesCollectionResponse);
    done();
  });

  it('should export resultPrizeResponse', done => {

    const resultPrizeResponse = index.model.resultPrizeResponse;
    should.exist(resultPrizeResponse);
    done();
  });

  it('should export resultPrizeWinnerResponse', done => {

    const resultPrizeWinnerResponse = index.model.resultPrizeWinnerResponse;
    should.exist(resultPrizeWinnerResponse);
    done();
  });

  it('should export resultResponse', done => {

    const resultResponse = index.model.resultResponse;
    should.exist(resultResponse);
    done();
  });

  it('should export ticketRequest', done => {

    const ticketRequest = index.model.ticketRequest;
    should.exist(ticketRequest);
    done();
  });

  it('should export ticketResponse', done => {

    const ticketResponse = index.model.ticketResponse;
    should.exist(ticketResponse);
    done();
  });

  it('should export tradeResponse', done => {

    const tradeResponse = index.model.tradeResponse;
    should.exist(tradeResponse);
    done();
  });

  it('should export ticketDetailsResponse', done => {

    const ticketDetailsResponse = index.model.ticketDetailsResponse;
    should.exist(ticketDetailsResponse);
    done();
  });

  it('should export meta version', done => {

    const version = index.VERSION;
    should.exist(version);
    done();
  });
});