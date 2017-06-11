const m = require('mithril')
const R = require('ramda')
const load = require('./model.load.js');


var User = {
  current: {},
  errors:{},
  updatedUserObject:{},

  load:_ => {
    const onError =x => console.log('E',x)
    const onSuccess = x => console.log('s',x)

    load(id).fork(onError, onSuccess)
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
