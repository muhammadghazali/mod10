'use strict';

var expect = require('expect.js');
var mod10 = require('../');

describe('Test valid credit card number', function() {
  it('should return true', function() {
    var validCC = 30569309025904;

    expect(mod10(validCC)).to.be.ok();
  });
});

describe('Test invalid credit card number', function() {
  it('should return true', function() {
    var invalidCC = 30569309825904;

    expect(mod10(invalidCC)).to.not.be.ok();
  });
});
