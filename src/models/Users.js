var m = require("mithril")
var UserRef = firebase.database().ref("users/");

var Users = {
    list: [],
    loadList: _ => {
      UserRef.on("value", snapshot =>{
        Users.list = snapshot.val()
        m.redraw()
      })
    }
}

module.exports = Users
