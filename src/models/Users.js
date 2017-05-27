var m = require("mithril")

var Users = {
    list: [],
    loadList: _ => {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        })
        .then(result => Users.list = result.data)
    },
}

module.exports = Users
