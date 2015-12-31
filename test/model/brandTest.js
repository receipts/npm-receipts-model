var chai = require('chai');
var should = chai.should();
var Brand = require('../../lib/model/brand').Brand;

describe('brand enum test', function () {

  it('should get brand for HAIRDRESSING', function (done) {
    var brand = Brand.getBrand('HAIRDRESSING');

    should.exist(brand);
    brand.should.be.equal(Brand.HAIRDRESSING);
    done();
  });

  it('should get brand for PRIVATE_MEDIC_DENTAL', function (done) {
    var brand = Brand.getBrand('PRIVATE_MEDIC_DENTAL');

    should.exist(brand);
    brand.should.be.equal(Brand.PRIVATE_MEDIC_DENTAL);
    done();
  });

  it('should get OTHER brand for unknown value', function (done) {
    var brand = Brand.getBrand('unknown-value');

    should.exist(brand);
    brand.should.be.equal(Brand.OTHER);
    done();
  });

});
