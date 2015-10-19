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


var getContestTicketsCollection = function getContestTicketsCollection(req, res, next) {
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



  ticketsService.getContestTicketsCollection(id, limit, offset, sort, function (err, data) {
    next.ifError(err);

    res.send(STATUSES['get'], buildTickets(data));
    return next();
  });
};

var createContestsTicket = function createContestsTicket(req, res, next) {
  try {
    assert.object(req.params, 'params');
    assert.string(req.params.id, 'id');

  }
  catch (e) {
    return next(new BadRequestError(e.message));
  }

  var id = req.params.id;


  var ticketRequest = req.params;

  ticketsService.createContestsTicket(id, ticketRequest, function (err, data) {
    next.ifError(err);

    res.send(STATUSES['post'], buildTickets(data));
    return next();
  });
};

var buildTickets = function buildTickets(data){

};

module.exports = {
  getContestTicketsCollection: getContestTicketsCollection, 
  createContestsTicket: createContestsTicket
};
