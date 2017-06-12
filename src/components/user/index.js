const m = require('mithril')
const R = require('ramda')
const UserRef = id => firebase.database().ref(`users/${id}`)


const User = {
  current: {},
  errors:{},
  updatedUserObject:{},

  load:id => {
    const onError =x => console.log('E',x)
    const onSuccess = x => {
      User.current = x.val()
      User.updatedUserObject = R.clone(User.current)
      m.redraw()
    }

    UserRef(id).once("value").then(onSuccess, onError)
  },


  save: _ =>  {
  console.log('save',User.updatedUserObject)
    UserRef(User.current.id).update(
      { firstName:  User.updatedUserObject.firstName
      , lastName:   User.updatedUserObject.lastName
      , profilePic: User.updatedUserObject.profilePic
      })
  },
}

module.exports = User
