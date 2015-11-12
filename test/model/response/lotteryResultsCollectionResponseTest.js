var chai = require('chai');
var should = chai.should();
var lotteryResultsCollectionResponse = require('../../../lib/model/response/lotteryResultsCollectionResponse');

describe('lotteryResultsCollectionResponse model test', function () {

  var total = 'total';
  var results = 'results';

  it('should create model', function (done) {

    var lotteryResultsCollectionResponseModel = new lotteryResultsCollectionResponse.LotteryResultsCollectionResponse(
      total, 
      results
    );

    should.exist(lotteryResultsCollectionResponseModel);
    lotteryResultsCollectionResponseModel.total.should.be.equal(total);
    lotteryResultsCollectionResponseModel.results.should.be.equal(results);
    done();
  });

  it('should create model by builder', function (done) {

    var lotteryResultsCollectionResponseModel = new lotteryResultsCollectionResponse.LotteryResultsCollectionResponseBuilder()
      .withTotal(total)
      .withResults(results)
      .build();

    should.exist(lotteryResultsCollectionResponseModel);
    lotteryResultsCollectionResponseModel.total.should.be.equal(total);
    lotteryResultsCollectionResponseModel.results.should.be.equal(results);
    done();
  });

});
