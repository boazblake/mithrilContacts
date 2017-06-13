const m = require("mithril")
const UserRef = firebase.database().ref("users/");

const Users = {
    list: [],
    loadList: _ => {
      const onError = e => console.log(e)
      const onSuccess = s => {
        Users.list = s.val()
        m.redraw()
      }
      UserRef.once("value").then(onSuccess, onError)
    }
}

module.exports = Users
