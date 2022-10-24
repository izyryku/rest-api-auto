const request = require('request-promise')

class UsersApi {
    constructor() {
        this.request = request.defaults({
         headers: {
            "Content-Type": "application/json",
            Accept: "application"
         },
         json: true  
        })
    }

    getUsersList() {
        const path = "https://gorest.co.in/public/v2/users"

        return this.request.get({
            url: path
        })
    }
}





module.exports = UsersApi;