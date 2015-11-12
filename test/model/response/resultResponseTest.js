var chai = require('chai');
var should = chai.should();
var resultResponse = require('../../../lib/model/response/resultResponse');

describe('resultResponse model test', function () {

  var name = 'name';
  var date = 'date';
  var status = 'status';
  var prizes = 'prizes';

  it('should create model', function (done) {

    var resultResponseModel = new resultResponse.ResultResponse(
      name, 
      date, 
      status, 
      prizes
    );

    should.exist(resultResponseModel);
    resultResponseModel.name.should.be.equal(name);
    resultResponseModel.date.should.be.equal(date);
    resultResponseModel.status.should.be.equal(status);
    resultResponseModel.prizes.should.be.equal(prizes);
    done();
  });

  it('should create model by builder', function (done) {

    var resultResponseModel = new resultResponse.ResultResponseBuilder()
      .withName(name)
      .withDate(date)
      .withStatus(status)
      .withPrizes(prizes)
      .build();

    should.exist(resultResponseModel);
    resultResponseModel.name.should.be.equal(name);
    resultResponseModel.date.should.be.equal(date);
    resultResponseModel.status.should.be.equal(status);
    resultResponseModel.prizes.should.be.equal(prizes);
    done();
  });

});
