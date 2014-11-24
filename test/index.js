'use strict'

var describe = require('mocha').describe;
var it = require('mocha').it;
var expect = require('chai').expect;
var angleBetweenPoints = require('../');

describe('angle-between-points', function() {

  var p1, p2;

  it('should return the proper angle', function() {

    p1 = { x: 1, y: 1 };
    p2 = { x: 4, y: 4 };
    var result = angleBetweenPoints(p1, p2);
    expect(result).to.equal(45);

    p1 = { x: 1, y: 1 };
    p2 = { x: -2, y: -2 };
    var result = angleBetweenPoints(p1, p2);
    expect(result).to.equal(225);

    p1 = { x: 4, y: 7 };
    p2 = { x: 9, y: 2 };
    var result = angleBetweenPoints(p1, p2);
    expect(parseInt(result)).to.equal(315);

  });

});
