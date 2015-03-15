'use strict';

var expect = require('expect.js');
var mod10 = require('../');

describe('Test credit card numbers', function() {
  describe('Test valid credit card number', function() {
    it('should return true', function() {
      var validCC = 30569309025904;

      expect(mod10(validCC)).to.be.ok();
    });
  });

  describe('Test invalid credit card number', function() {
    it('should return false', function() {
      var invalidCC = 30569309825904;

      expect(mod10(invalidCC)).to.not.be.ok();
    });
  });
});

describe('IMEI numbers', function() {
  describe('# Test valid IMEI number', function() {
    it('should return true', function() {
      var validIMEI = 490154203237518;

      expect(mod10(validIMEI)).to.be.ok();
    });
  });

  describe('# Test invalid IMEI number', function() {
    it('should return false', function() {
      var invalidIMEI = 355873847028122;

      expect(mod10(invalidIMEI)).to.not.be.ok();
    });
  });
});
