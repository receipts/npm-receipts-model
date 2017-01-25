const chai = require('chai');
const should = chai.should();
const agreementsRequest = require('../../../lib/model/request/agreementsRequest');

describe('agreementsRequest model test', () => {

  const termsOfService = 'termsOfService';
  const personalDataProcessing = 'personalDataProcessing';
  const useMyEffigy = 'useMyEffigy';

  it('should create model', done => {

    const agreementsRequestModel = new agreementsRequest.AgreementsRequest(
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

    const agreementsRequestModel = new agreementsRequest.AgreementsRequestBuilder()
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
