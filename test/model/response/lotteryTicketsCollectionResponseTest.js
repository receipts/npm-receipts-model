const chai = require('chai');
const should = chai.should();
const lotteryTicketsCollectionResponse = require('../../../lib/model/response/lotteryTicketsCollectionResponse');

describe('lotteryTicketsCollectionResponse model test', () => {

  const total = 'total';
  const tickets = 'tickets';

  it('should create model', done => {

    const lotteryTicketsCollectionResponseModel = new lotteryTicketsCollectionResponse.LotteryTicketsCollectionResponse(
      total,
      tickets
    );

    should.exist(lotteryTicketsCollectionResponseModel);
    lotteryTicketsCollectionResponseModel.total.should.be.equal(total);
    lotteryTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

  it('should create model by builder', function (done) {

    const lotteryTicketsCollectionResponseModel = new lotteryTicketsCollectionResponse.LotteryTicketsCollectionResponseBuilder()
      .withTotal(total)
      .withTickets(tickets)
      .build();

    should.exist(lotteryTicketsCollectionResponseModel);
    lotteryTicketsCollectionResponseModel.total.should.be.equal(total);
    lotteryTicketsCollectionResponseModel.tickets.should.be.equal(tickets);
    done();
  });

});
