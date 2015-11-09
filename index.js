var meta = require('./lib/meta');

module.exports = {

  error: {
    ServiceUnavailableError: require('./lib/error/serviceUnavailableError').ServiceUnavailableError,
    UnauthorizedUserError: require('./lib/error/unauthorizedUserError').UnauthorizedUserError
  },
  enum: {
    Brand: require('./lib/model/brand').Brand,
    Currency: require('./lib/model/currency').Currency
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
    tradeResponse: require('./lib/model/response/tradeResponse')
  },

  /**
   * the version of the library
   * @property VERSION
   * @type String
   * @static
   */
  VERSION: meta.VERSION
};


