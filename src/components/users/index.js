const m = require("mithril")
const R = require("ramda")
const { getUsers } = require("./model.load.js")
const {log} = require("../../utils/index.js")

const unwrap = obj => {
  R.map(obj)
}


const Users = {
  state: {},
  data: {
    list: R.unapply(R.identity)
  },
  errors: {},

  load: () => {
    const onError = e =>
      log("e")(e)
    const onSuccess = s => {
      Users.data.list = s
      Users.state.list = R.clone(Users.data.list)
      m.redraw()
      log("index.js")( unwrap(Users.state.list))
    }

    getUsers.fork(onError, onSuccess)
  }
}

module.exports = Users
