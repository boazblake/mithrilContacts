const m = require("mithril")
const R = require("ramda")
const Users = require("./index.js")
const { log } = require("../../utils/index.js")

const UserList = {
  oninit: Users.load,
  view:() => {
    Users.state.list
      //when Users.state.list is populated log the id of each user
      ? log("USERS")(Users.state.list.map(u => R.identity(u[0]))) // SWAP//
      : "Loading"
  }
}

module.exports = UserList

//SWAP
// m(".user.list", Users.state.list.map( user => {
//   [ m("a.user-list-item"
//     , { oncreate: m.route.link, href: `/edit/${user[0]}`})
//     , "user[1].firstName"+ " " + "user[1].lastName"
//   ]
// }))
