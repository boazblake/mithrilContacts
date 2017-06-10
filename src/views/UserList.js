const m = require('mithril')
const Users = require('../models/Users.js')

const UserList = {
  oninit:Users.loadList,
  view: _ =>{
    return Users.list.length > 0 ? m(".user-list", Users.list.map( user =>
      m("a.user-list-item"
              , {oncreate:m.route.link, href: `/edit/${user.id}`}
              , user.firstName + " " + user.lastName , m("img", {src:user.profilePic}))
    )) : "LOADING"
  }
}


module.exports = UserList
