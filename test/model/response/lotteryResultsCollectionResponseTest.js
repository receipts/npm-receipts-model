const chai = require('chai');
const should = chai.should();
const lotteryResultsCollectionResponse = require('../../../lib/model/response/lotteryResultsCollectionResponse');

describe('lotteryResultsCollectionResponse model test', () => {

  const total = 'total';
  const results = 'results';

  it('should create model', done => {

    const lotteryResultsCollectionResponseModel = new lotteryResultsCollectionResponse.LotteryResultsCollectionResponse(
      total,
      results
    );

    should.exist(lotteryResultsCollectionResponseModel);
    lotteryResultsCollectionResponseModel.total.should.be.equal(total);
    lotteryResultsCollectionResponseModel.results.should.be.equal(results);
    done();
  });

  it('should create model by builder', function (done) {

    const lotteryResultsCollectionResponseModel = new lotteryResultsCollectionResponse.LotteryResultsCollectionResponseBuilder()
      .withTotal(total)
      .withResults(results)
      .build();

    should.exist(lotteryResultsCollectionResponseModel);
    lotteryResultsCollectionResponseModel.total.should.be.equal(total);
    lotteryResultsCollectionResponseModel.results.should.be.equal(results);
    done();
  });

});
