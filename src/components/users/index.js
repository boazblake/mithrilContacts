const m = require("mithril")
const R = require('ramda')
const  {getUsers}  = require('./model.load.js')
const UserRef = firebase.database().ref("users/");
const {log} = require('../../utils/index.js')
const Task = require('data.task')

const Users = {
  state : {},
  data : {
    list:R.unapply(R.identity)
  },
  errors:{},

  load: _ => {
    const onError = e =>
      log('e')(e)
    const onSuccess = s => {
      Users.data.list = s
      Users.state.list = R.clone(Users.data.list)
      m.redraw()
      // console.log('index.js',Users.state.list.map(u=> console.log(u[0], u[1])))
    }

    getUsers.fork(onError, onSuccess)
  },
}

module.exports = Users
