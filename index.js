var meta = require('./lib/meta');

module.exports = {

  error: {
    TicketNotFoundError: require('./lib/error/ticketNotFoundError').TicketNotFoundError,
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError,
    UnauthorizedUserError: require('./lib/error/unauthorizedUserError').UnauthorizedUserError,
    AlreadyExistsError: require('./lib/error/alreadyExistsError').AlreadyExistsError,
    UnknownValidateError: require('./lib/error/unknownValidateError').UnknownValidateError,
    InvalidPointOfSaleError: require('./lib/error/invalidPointOfSaleError').InvalidPointOfSaleError,
    InvalidPurchaseOrderNumberError: require('./lib/error/invalidPurchaseOrderNumberError').InvalidPurchaseOrderNumberError,
    InvalidDateError: require('./lib/error/invalidDateError').InvalidDateError,
    InvalidAmountError: require('./lib/error/invalidAmountError').InvalidAmountError,
    InvalidTaxRegistrationNumberError: require('./lib/error/invalidTaxRegistrationNumberError').InvalidTaxRegistrationNumberError,
    InvalidEmailError: require('./lib/error/invalidEmailError').InvalidEmailError,
    InvalidPhoneError: require('./lib/error/invalidPhoneError').InvalidPhoneError,
    InvalidTradeError: require('./lib/error/invalidTradeError').InvalidTradeError
  },
  enum: {
    Trade: require('./lib/model/trade').Trade,
    Currency: require('./lib/model/currency').Currency,
    ResultStatus: require('./lib/model/resultStatus').ResultStatus
  },
  model: {
    /**
     * the ticketRequest model and builder.
     * @property ticketRequest
     * @type ticketRequest
     * @static
     */
    ticketRequest: require('./lib/model/request/ticketRequest'),
    /**
     * the agreementsRequest model and builder.
     * @property agreementsRequest
     * @type agreementsRequest
     * @static
     */
    agreementsRequest: require('./lib/model/request/agreementsRequest'),
    /**
     * the amountResponse model and builder.
     * @property amountResponse
     * @type amountResponse
     * @static
     */
    amountResponse: require('./lib/model/response/amountResponse'),
    /**
     * the lotteryResultsCollectionResponse model and builder.
     * @property lotteryResultsCollectionResponse
     * @type lotteryResultsCollectionResponse
     * @static
     */
    lotteryResultsCollectionResponse: require('./lib/model/response/lotteryResultsCollectionResponse'),
    /**
     * the lotteryTicketsCollectionResponse model and builder.
     * @property lotteryTicketsCollectionResponse
     * @type lotteryTicketsCollectionResponse
     * @static
     */
    lotteryTicketsCollectionResponse: require('./lib/model/response/lotteryTicketsCollectionResponse'),
    /**
     * the lotteryTradesCollectionResponse model and builder.
     * @property lotteryTradesCollectionResponse
     * @type lotteryTradesCollectionResponse
     * @static
     */
    lotteryTradesCollectionResponse: require('./lib/model/response/lotteryTradesCollectionResponse'),
    /**
     * the resultPrizeResponse model and builder.
     * @property resultPrizeResponse
     * @type resultPrizeResponse
     * @static
     */
    resultPrizeResponse: require('./lib/model/response/resultPrizeResponse'),
    /**
     * the resultPrizeWinnerResponse model and builder.
     * @property resultPrizeWinnerResponse
     * @type resultPrizeWinnerResponse
     * @static
     */
    resultPrizeWinnerResponse: require('./lib/model/response/resultPrizeWinnerResponse'),
    /**
     * the resultResponse model and builder.
     * @property resultResponse
     * @type resultResponse
     * @static
     */
    resultResponse: require('./lib/model/response/resultResponse'),
    /**
     * the ticketResponse model and builder.
     * @property ticketResponse
     * @type ticketResponse
     * @static
     */
    ticketResponse: require('./lib/model/response/ticketResponse'),
    /**
     * the tradeResponse model and builder.
     * @property tradeResponse
     * @type tradeResponse
     * @static
     */
    tradeResponse: require('./lib/model/response/tradeResponse'),
    /**
     * the ticketDetailsResponse model and builder.
     * @property ticketDetailsResponse
     * @type ticketDetailsResponse
     * @static
     */
    ticketDetailsResponse: require('./lib/model/response/ticketDetailsResponse')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


