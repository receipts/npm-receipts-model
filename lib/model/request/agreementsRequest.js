var AgreementsRequest = function AgreementsRequest(termsOfService, personalDataProcessing, useMyEffigy) {
  this.termsOfService = termsOfService;
  this.personalDataProcessing = personalDataProcessing;
  this.useMyEffigy = useMyEffigy;
};

var AgreementsRequestBuilder = function AgreementsRequestBuilder() {
  this.termsOfService = null;
  this.personalDataProcessing = null;
  this.useMyEffigy = null;

  var self = this;

  this.withTermsOfService = function withTermsOfService(termsOfService) {
    self.termsOfService = termsOfService;
    return self;
  };

  this.withPersonalDataProcessing = function withPersonalDataProcessing(personalDataProcessing) {
    self.personalDataProcessing = personalDataProcessing;
    return self;
  };

  this.withUseMyEffigy = function withUseMyEffigy(useMyEffigy) {
    self.useMyEffigy = useMyEffigy;
    return self;
  };


  this.build = function build() {
    return new AgreementsRequest(
     self.termsOfService, 
     self.personalDataProcessing, 
     self.useMyEffigy
    );
  };

};

module.exports = exports = {
  AgreementsRequest: AgreementsRequest,
  AgreementsRequestBuilder: AgreementsRequestBuilder
};
