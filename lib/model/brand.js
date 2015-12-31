var Brand = {
  HAIRDRESSING: 'HAIRDRESSING',
  PRIVATE_MEDIC_DENTAL: 'PRIVATE_MEDIC_DENTAL',
  OTHER: 'OTHER',

  getBrand: function (type) {

    if (this.hasOwnProperty(type)) {
      return Brand[type];
    }

    return Brand.OTHER;
  }
};


module.exports = {
  Brand: Brand
};
