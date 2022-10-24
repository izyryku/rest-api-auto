const {expect} = require('chai');
const {double, triple} = require('../../src/math');


describe('Math function', function() {

    //Hooks
    before(function () {
        //runs before all test in this test field
    })

    after(function () {
        //runs after all test in this test field
    })

    beforeEach(function () {
        //runs before each test in this test field
    })

    afterEach(function () {
        //runs after each test in this test field
    })



    describe('Double function', function() {

    it("passing 4 to double() results in 8", function () {

        expect(double(4)).to.equal(8)
    });
});
    describe('Triple function', function() {

    it("passing 4 to triple() results in 12", function () {

        expect(triple(4)).to.equal(12)
    });
});
});