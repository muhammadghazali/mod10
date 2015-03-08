'use strict';

var expect = require('expect.js');
var mod10 = require('../');

describe('mod10 node module', function() {
  it('must have at least one test', function() {
    var sampleAmericanExpressCC = 378282246310005;

    expect(mod10(sampleAmericanExpressCC)).to.be.ok();
  });
});
