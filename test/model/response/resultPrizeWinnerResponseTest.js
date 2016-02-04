var chai = require('chai');
var should = chai.should();
var resultPrizeWinnerResponse = require('../../../lib/model/response/resultPrizeWinnerResponse');

describe('resultPrizeWinnerResponse model test', function () {

  var code = 'code';
  var name = 'name';
  var type = 'type';

  it('should create model', function (done) {

    var resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponse(
      code,
      name,
      type
    );

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    resultPrizeWinnerResponseModel.name.should.be.equal(name);
    resultPrizeWinnerResponseModel.type.should.be.equal(type);
    done();
  });

  it('should create model by builder', function (done) {

    var resultPrizeWinnerResponseModel = new resultPrizeWinnerResponse.ResultPrizeWinnerResponseBuilder()
      .withCode(code)
      .withName(name)
      .withType(type)
      .build();

    should.exist(resultPrizeWinnerResponseModel);
    resultPrizeWinnerResponseModel.code.should.be.equal(code);
    resultPrizeWinnerResponseModel.name.should.be.equal(name);
    resultPrizeWinnerResponseModel.type.should.be.equal(type);
    done();
  });

});
