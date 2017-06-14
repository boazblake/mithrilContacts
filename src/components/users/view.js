const m = require('mithril')
const Users = require('./index.js')

const UserList = {
  oninit:Users.load,
  view: _ =>{
    return Users.state.list? m(".user-list", Users.state.list.map( user =>
      m("user.list", [m("a.user-list-item"
              , {oncreate:m.route.link, href: `/edit/${user.id}`}
              , user.firstName + " " + user.lastName), m("img", {src:user.profilePic})])
    )) : "LOADING"
  }
}


module.exports = UserList
