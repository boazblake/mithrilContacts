const m = require("mithril")
const R = require("ramda")
const { getUsers } = require("./model.js")

const Users = {
  state: {},
  data: {
    list: []
  },
  errors: {},

  load: () => {
    const onError = e =>
      console.error("no users", e)

    const onSuccess = dto => {
      const value = [[{}]]
      const data = dto.getOrElse(value)

      if (data === value) {
        return console.error("no users")
      }

      Users.data.list = data
      Users.state.list = R.clone(Users.data.list)
      m.redraw()
    }

    getUsers.fork(onError, onSuccess)
  },

  reset: () =>{

  }
}

module.exports = Users
