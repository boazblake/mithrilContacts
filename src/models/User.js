const m = require('mithril')
const R = require('ramda')
var UserRef = id=> firebase.database().ref(`users/${id}`);

var User = {
  current: {},
  errors:{},
  updatedUserObject:{},

  load: id => {
    UserRef(id).on("value", snapshot =>{
      User.current = snapshot.val()
      console.log('user.current',User.current)
      User.updatedUserObject = R.clone(User.current)
      console.log('updateduser',User.updatedUserObject)
      m.redraw()
    })
  },

  save: _ =>  {
  console.log('save',User.updatedUserObject)
    UserRef(User.current.id).update(
      { firstName:  User.updatedUserObject.firstName
      , lastName:   User.updatedUserObject.lastName
      , profilePic: User.updatedUserObject.profilePic
      })
  }
}

module.exports = User
