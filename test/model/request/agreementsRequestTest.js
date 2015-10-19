var chai = require('chai');
var should = chai.should();
var agreementsRequest = require('../../../lib/model/request/agreementsRequest');

describe('agreementsRequest model test', function () {

  var termsOfService = 'termsOfService';
  var personalDataProcessing = 'personalDataProcessing';
  var useMyEffigy = 'useMyEffigy';

  it('should create model', function (done) {

    var agreementsRequestModel = new agreementsRequest.AgreementsRequest(
      termsOfService, 
      personalDataProcessing, 
      useMyEffigy
    );

    should.exist(agreementsRequestModel);
    agreementsRequestModel.termsOfService.should.be.equal(termsOfService);
    agreementsRequestModel.personalDataProcessing.should.be.equal(personalDataProcessing);
    agreementsRequestModel.useMyEffigy.should.be.equal(useMyEffigy);
    done();
  });

  it('should create model by builder', function (done) {

    var agreementsRequestModel = new agreementsRequest.AgreementsRequestBuilder()
      .withTermsOfService(termsOfService)
      .withPersonalDataProcessing(personalDataProcessing)
      .withUseMyEffigy(useMyEffigy)
      .build();

    should.exist(agreementsRequestModel);
    agreementsRequestModel.termsOfService.should.be.equal(termsOfService);
    agreementsRequestModel.personalDataProcessing.should.be.equal(personalDataProcessing);
    agreementsRequestModel.useMyEffigy.should.be.equal(useMyEffigy);
    done();
  });

});
