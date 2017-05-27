const m = require('mithril')
const Users = require('../models/Users.js')

module.exports = {
  oninit:Users.loadList,
  view: function() {
    return m(".user-list", Users.list.map( function(user) {
      return m("a.user-list-item"
              , {href: "/edit/" + user.id, oncreate:m.route.link}
              , user.firstName + " " + user.lastName)
    }))
  }
}
