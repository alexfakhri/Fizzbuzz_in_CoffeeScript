// Generated by CoffeeScript 1.8.0
(function() {
  var Fizzbuzz, chai, expect;

  chai = require('chai');

  expect = chai.expect;

  Fizzbuzz = require('../src/fizzbuzz');

  describe('Fizzbuzz', function() {
    var fizzbuzz;
    fizzbuzz = null;
    before(function() {
      return fizzbuzz = new Fizzbuzz;
    });
    it('knows when a number is divisible by 3', function() {
      return expect(fizzbuzz.isDivisibleByThree(3)).to.be["true"];
    });
    it('knows when a number is divisible by 5', function() {
      return expect(fizzbuzz.isDivisibleByFive(5)).to.be["true"];
    });
    it('knows when a number is divisible by 15', function() {
      return expect(fizzbuzz.isDivisibleByFifteen(15)).to.be["true"];
    });
    it('knows when a number is not Divisible by 3', function() {
      return expect(fizzbuzz.isDivisibleByThree(1)).to.be["false"];
    });
    it('knows when a number is not divisible by 5', function() {
      return expect(fizzbuzz.isDivisibleByFive(1)).to.be["false"];
    });
    it('knows when a number is not divisible by 15', function() {
      return expect(fizzbuzz.isDivisibleByFifteen(1)).to.be["false"];
    });
    it('says Fizz when a number is divisible by 3', function() {
      return expect(fizzbuzz.says(3)).to.equal("Fizz");
    });
    it('says Buzzzz when a number is divisible by 5', function() {
      return expect(fizzbuzz.says(5)).to.equal("Buzz");
    });
    it('says Fizz when a number is divisible by 15', function() {
      return expect(fizzbuzz.says(15)).to.equal("Fizzbuzz");
    });
    return it('says the number if the number is not divisible by 3 or 5', function() {
      return expect(fizzbuzz.says(1)).to.equal(1);
    });
  });

}).call(this);
