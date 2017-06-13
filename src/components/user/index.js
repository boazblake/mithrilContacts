const m = require('mithril')
const R = require('ramda')
const UserRef = id => firebase.database().ref(`users/${id}`)


const User = {
  //TODO#1: add data and state pbjects
  current: {},
  errors:{},
  updatedUserObject:{},

  edit:id => {
    const onError =x => console.log('E',x)
    const onSuccess = x => {
      User.current = x.val()
      User.updatedUserObject = R.clone(User.current)
      m.redraw()
    }

    UserRef(id).once("value").then(onSuccess, onError)
  },

  // TODO#3: finish add function
  add: _ => {
    console.log('add a contact')
    User.reset()
  },

//TODO#4: refrac save function with login for adding a new user
  save: _ =>  {
  console.log('user details',User.updatedUserObject)
  User.updatedUserObject.id
    ? editUser(User.updatedUserObject)
    : addUser(User.updatedUserObject)
  m.redraw()
  },

//TODO#2: complete reset function
  reset: _ => {
    User.current ={}
    User.updatedUserObject
  },
}

module.exports = User
