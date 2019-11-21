var gr = require("../dist/getRandomChoice.js");

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('RPSLS', function() {
    describe('randomChoice', function() {
        it('debería devolver un string', function() {
            assert(typeof(gr.getRandomChoice()) == "string");
        })
    })
})