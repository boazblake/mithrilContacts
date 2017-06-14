const m = require("mithril")
const R = require('ramda')
const UserRef = firebase.database().ref("users/");

const Users = {
  state : {},
  data : {
    list:[]
  },
  errors:{},

  load: _ => {
    const onError = e => console.log(e)
    const onSuccess = s => {
      Users.data.list = s.val()
      Users.state = R.clone(Users.data)
      console.log(Users.state)
      m.redraw()
    }
    UserRef.once("value").then(onSuccess, onError)
  },
}

module.exports = Users
