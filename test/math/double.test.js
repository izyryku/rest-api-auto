const {expect} = require('chai');
const {double} = require('./math');

describe('Double function', function() {

    it("passing 4 to double() results in 8", function () {

        expect(double(4)).to.equal(8)
    });
    
    it("passing 8 to double() results in 16", function () {

        expect(double(8)).to.equal(16)
    });
});