var Brand = {
  HAIRDRESSING: 'HAIRDRESSING',
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
