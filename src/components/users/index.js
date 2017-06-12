const m = require("mithril")
const loader = require('./model.load.js')
const UserRef = firebase.database().ref("users/");

const Users = {
    list: [],
    loadList: _ => {
      UserRef.on("value", snapshot =>
        {Users.list = snapshot.val()
            m.redraw()
        console.log(Users.list)
    }
      )
    }
}

module.exports = Users
