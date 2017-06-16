const m = require("mithril")
const R = require("ramda")
const UserRef = id => firebase.database().ref(`users/${id}`)
const { editUser, addUser} = require("./model.js")

const User = {
  state: {
    current:{},
    updatedUserObject:{},
  },
  data: {},
  errors:{},

  edit:id => {
    const onError =e => console.log("E",e)
    const onSuccess = data => {
      console.log("editing a contact", data.val())
      User.data = data.val()
      User.state.current = R.clone(User.data)
      User.state.updatedUserObject = R.clone(User.state.current)
      m.redraw()
    }

    UserRef(id).once("value").then(onSuccess, onError)
  },

  add: () => {
    console.log("adding a contact")
    User.reset()
    m.redraw()
    console.log("current",User.state.current)
    console.log("updated",User.state.updatedUserObject)
  },

  save: () => {
    const onError =e => console.log("e",e)
    const onSuccess = () => {
      User.state.current = R.clone(User.state.updatedUserObject)
      User.state.updatedUserObject = R.clone(User.state.current)
    }

    console.log("saving this info", User.state.updatedUserObject)
    console.log("used to be", User.state.current)
    console.log(User.state.current.id === "")
    console.log(User.state.current.profilePic)

    User.state.current.id === ""
      ? addUser(User.state.updatedUserObject, User.state.current.profilePic).then(onSuccess, onError)
      : editUser(User.state.updatedUserObject).then(onSuccess, onError)

  },

  reset:() => {
    User.data = {},
    User.state = {
      current:
        { firstName: ""
        , lastName: ""
        , profilePic: "http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
        , id: ""
        },
      updatedUserObject: { },
    },
    User.errors = {}
  },
}

module.exports = User
