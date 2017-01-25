class AgreementsRequest {
  constructor(termsOfService, personalDataProcessing, useMyEffigy) {
    this.termsOfService = termsOfService;
    this.personalDataProcessing = personalDataProcessing;
    this.useMyEffigy = useMyEffigy;
  }
}

class AgreementsRequestBuilder {
  constructor() {
    this.termsOfService = null;
    this.personalDataProcessing = null;
    this.useMyEffigy = null;
  }

  withTermsOfService(termsOfService) {
    this.termsOfService = termsOfService;
    return this;
  }

  withPersonalDataProcessing(personalDataProcessing) {
    this.personalDataProcessing = personalDataProcessing;
    return this;
  }

  withUseMyEffigy(useMyEffigy) {
    this.useMyEffigy = useMyEffigy;
    return this;
  }

  build() {
    return new AgreementsRequest(
      this.termsOfService,
      this.personalDataProcessing,
      this.useMyEffigy
    );
  }
}

module.exports = exports = {
  AgreementsRequest: AgreementsRequest,
  AgreementsRequestBuilder: AgreementsRequestBuilder
};
