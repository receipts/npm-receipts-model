var chai = require('chai');
var should = chai.should();
var resultPrizeWinnerResponse = require('../../../lib/model/response/resultPrizeWinnerResponse');

describe('resultPrizeWinnerResponse model test', function () {

  var code = 'code';

  it('should create model', function (done) {

    var resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponse(
      code
    );

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    done();
  });

  it('should create model by builder', function (done) {

    var resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponseBuilder()
      .withCode(code)
      .build();

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    done();
  });

});
