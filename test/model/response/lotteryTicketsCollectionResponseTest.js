var chai = require('chai');
var should = chai.should();
var lotteryTicketsCollectionResponse = require('../../../lib/model/response/lotteryTicketsCollectionResponse');

describe('lotteryTicketsCollectionResponse model test', function () {

  var total = 'total';
  var tickets = 'tickets';

  it('should create model', function (done) {

    var lotteryTicketsCollectionResponseModel = new lotteryTicketsCollectionResponse.LotteryTicketsCollectionResponse(
      total, 
      tickets
    );

    should.exist(lotteryTicketsCollectionResponseModel);
    lotteryTicketsCollectionResponseModel.total.should.be.equal(total);
    lotteryTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

  it('should create model by builder', function (done) {

    var lotteryTicketsCollectionResponseModel = new lotteryTicketsCollectionResponse.LotteryTicketsCollectionResponseBuilder()
      .withTotal(total)
      .withTickets(tickets)
      .build();

    should.exist(lotteryTicketsCollectionResponseModel);
    lotteryTicketsCollectionResponseModel.total.should.be.equal(total);
    lotteryTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

});
