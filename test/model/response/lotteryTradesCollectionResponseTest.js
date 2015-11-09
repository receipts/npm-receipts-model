var chai = require('chai');
var should = chai.should();
var lotteryTradesCollectionResponse = require('../../../lib/model/response/lotteryTradesCollectionResponse');

describe('lotteryTradesCollectionResponse model test', function () {

  var total = 'total';
  var trades = 'trades';

  it('should create model', function (done) {

    var lotteryTradesCollectionResponseModel = new lotteryTradesCollectionResponse.LotteryTradesCollectionResponse(
      total, 
      trades
    );

    should.exist(lotteryTradesCollectionResponseModel);
    lotteryTradesCollectionResponseModel.total.should.be.equal(total);
    lotteryTradesCollectionResponseModel.trades.should.be.equal(trades);
    done();
  });

  it('should create model by builder', function (done) {

    var lotteryTradesCollectionResponseModel = new lotteryTradesCollectionResponse.LotteryTradesCollectionResponseBuilder()
      .withTotal(total)
      .withTrades(trades)
      .build();

    should.exist(lotteryTradesCollectionResponseModel);
    lotteryTradesCollectionResponseModel.total.should.be.equal(total);
    lotteryTradesCollectionResponseModel.trades.should.be.equal(trades);
    done();
  });

});
