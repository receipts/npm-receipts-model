var chai = require('chai');
var should = chai.should();
var contestTicketsCollectionResponse = require('../../../lib/model/response/contestTicketsCollectionResponse');

describe('contestTicketsCollectionResponse model test', function () {

  var total = 'total';
  var tickets = 'tickets';

  it('should create model', function (done) {

    var contestTicketsCollectionResponseModel = new contestTicketsCollectionResponse.ContestTicketsCollectionResponse(
      total, 
      tickets
    );

    should.exist(contestTicketsCollectionResponseModel);
    contestTicketsCollectionResponseModel.total.should.be.equal(total);
    contestTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

  it('should create model by builder', function (done) {

    var contestTicketsCollectionResponseModel = new contestTicketsCollectionResponse.ContestTicketsCollectionResponseBuilder()
      .withTotal(total)
      .withTickets(tickets)
      .build();

    should.exist(contestTicketsCollectionResponseModel);
    contestTicketsCollectionResponseModel.total.should.be.equal(total);
    contestTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

});
