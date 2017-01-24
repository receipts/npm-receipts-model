const chai = require('chai');
const should = chai.should();
const lotteryTradesCollectionResponse = require('../../../lib/model/response/lotteryTradesCollectionResponse');

describe('lotteryTradesCollectionResponse model test', () => {

  const total = 'total';
  const trades = 'trades';

  it('should create model', done => {

    const lotteryTradesCollectionResponseModel = new lotteryTradesCollectionResponse.LotteryTradesCollectionResponse(
      total,
      trades
    );

    should.exist(lotteryTradesCollectionResponseModel);
    lotteryTradesCollectionResponseModel.total.should.be.equal(total);
    lotteryTradesCollectionResponseModel.trades.should.be.equal(trades);
    done();
  });

  it('should create model by builder', function (done) {

    const lotteryTradesCollectionResponseModel = new lotteryTradesCollectionResponse.LotteryTradesCollectionResponseBuilder()
      .withTotal(total)
      .withTrades(trades)
      .build();

    should.exist(lotteryTradesCollectionResponseModel);
    lotteryTradesCollectionResponseModel.total.should.be.equal(total);
    lotteryTradesCollectionResponseModel.trades.should.be.equal(trades);
    done();
  });

});
