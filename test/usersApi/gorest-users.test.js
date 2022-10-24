const {expect} = require('chai');
const GoRestUsersApi = require('../../src/GoRest-api')

describe.only("GoRest users API test (/users)", function() {
    let api;
    
    before(function () {
        api = new GoRestUsersApi();
    })

    describe("GoRest Get users list (GET /users)", function() {

    it("Can get a list of users (GET /users)", async function () {
        //API call here
        let response = await api.getUsersList();
        console.log(response)

        // Verify 10 objects are returned in the response
        expect(response).to.be.an('array').that.has.lengthOf(10);
        expect(response[0]).to.have.property('name').that.is.a('string');
    });
});
});