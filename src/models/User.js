const m = require('mithril')
var UserRef = id=> firebase.database().ref(`users/${id}`);

var User = {
  current: [],
  errors:{},

  load: id => {
    UserRef(id-1).on("value", snapshot =>{
      User.current = snapshot.val()
      m.redraw()
    })
  },

  save: _ =>  {
    UserRef(User.current.id).set({ firstNamename: User.current.firstName
                , lastName:User.current.lastName
                })
  }
}

module.exports = User
