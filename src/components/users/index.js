const m = require("mithril")
const R = require("ramda")
const { getUsers } = require("./model.js")
const {log} = require("../../utils/index.js")

const Users = {
  state: {},
  data: {
    list: []
  },
  errors: {},

  load: () => {
    const onError = e =>
      log("e")(e)
    const onSuccess = dto => {
      const value = [[{}]]
      const data = dto.getOrElse(value)
      if (data === value) {
        return console.error("no users")
      }
      Users.data.list = data
      R.map(log("DTO>>>")(dto))
      R.map(log("data>>>")(data))
      Users.state.list = R.clone(Users.data.list)
      log("Users.state.list")( Users.state.list)
      m.redraw()
    }

    getUsers.fork(onError, onSuccess)
  },

  reset: () =>{

  }
}

module.exports = Users
