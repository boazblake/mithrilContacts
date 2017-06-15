const m = require('mithril')
const Users = require('./index.js')
const R = require('ramda')
const {log} = require('../../utils/index.js')

const UserList = {
  oninit:Users.load,
  view: _ =>   {
    Users.state.list
      ? m(".user.list", Users.state.list.map( user => {
        [ m("a.user-list-item"
          , { oncreate: m.route.link, href: `/edit/${user[0]}`})
          , `user[1].firstName user[1].lastName`
        ]
      }))
      : "Loading"
  }
}


module.exports = UserList
