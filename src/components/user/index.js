const m = require('mithril')
const R = require('ramda')
const UserRef = id => firebase.database().ref(`users/${id}`)
const { editUser, addUser} = require('./model.js')

const User = {
  state: {
    current:{},
    updatedUserObject:{},
  },
  data: {},
  errors:{},

  edit:id => {
    const onError =x => console.log('E',x)
    const onSuccess = x => {
      User.data = x.val()
      User.state.current = R.clone(User.data)
      User.state.updatedUserObject = R.clone(User.state.current)
      m.redraw()
    }

    UserRef(id).once("value").then(onSuccess, onError)
  },

  add: _ => {
    console.log('add a contact')
    User.reset()
  },

  save: _ =>  {
    const onError =x => console.log('E',x)
    const onSuccess = x => {
      console.log(x)
      User.data = x.val()
      User.state.current = R.clone(User.data)
      User.state.updatedUserObject = R.clone(User.state.current)
      m.redraw()
    }

    R.isEmpty(User.state.updatedUserObject)
    ? addUser(User.state.current)
    : editUser(User.state.updatedUserObject).then(onSuccess, onError)
  m.redraw()
  },

  reset: _ => {
    User.data = {},
    User.state = {
      current:{ firstName: 'rome'
              , lastName: 'ulos'
              , profilePic: 'http://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg'
              },
      updatedUserObject: {},
    },
    User.errors = {}
  },
}

module.exports = User
