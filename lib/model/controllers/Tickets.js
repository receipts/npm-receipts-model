var options = require('config');
var assert = require('assert-plus');
var myRestifyApi = require('my-restify-api');
var BadRequestError = myRestifyApi.error.BadRequestError;

const STATUSES = {
  post: 201,
  get: 200,
  delete: 200,
  put: 200
};

var ticketsService = require('./ticketsService');


var getLotteryTicketsCollection = function getLotteryTicketsCollection(req, res, next) {
  try {
    assert.object(req.params, 'params');
    assert.string(req.params.id, 'id');
    assert.optionalString(req.params.limit, 'limit');
    assert.optionalString(req.params.offset, 'offset');
    assert.optionalString(req.params.sort, 'sort');

  }
  catch (e) {
    return next(new BadRequestError(e.message));
  }

  var id = req.params.id;
  var limit = req.params.limit || '100';
  var offset = req.params.offset;
  var sort = req.params.sort;



  ticketsService.getLotteryTicketsCollection(id, limit, offset, sort, function (err, data) {
    next.ifError(err);

    res.send(STATUSES['get'], buildTickets(data));
    return next();
  });
};

var createLotteryTicket = function createLotteryTicket(req, res, next) {
  try {
    assert.object(req.params, 'params');
    assert.string(req.params.id, 'id');

  }
  catch (e) {
    return next(new BadRequestError(e.message));
  }

  var id = req.params.id;


  var ticketRequest = req.params;

  ticketsService.createLotteryTicket(id, ticketRequest, function (err, data) {
    next.ifError(err);

    res.send(STATUSES['post'], buildTickets(data));
    return next();
  });
};

var buildTickets = function buildTickets(data){

};

module.exports = {
  getLotteryTicketsCollection: getLotteryTicketsCollection, 
  createLotteryTicket: createLotteryTicket
};
