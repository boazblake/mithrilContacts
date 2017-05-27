const m = require('mithril')

var User = {
  current: {},

  load: function(id) {
    return m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users/:id",
      data: {id: id},
      withCredentials: true,
    })
    .then(function(result) {
      User.current = result
    })
  },

  save: function(id) {
    return m.request({
        method: "PUT",
        url: "https://rem-rest-api.herokuapp.com/api/users/:id",
        data: User.current,
        withCredentials: true,
    })
  }
}

module.exports = User
