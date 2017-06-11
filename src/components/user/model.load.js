const m = require('mithril')
const R = require('ramda')
const folktale = require('folktale');

var UserRef = id => firebase.database().ref(`users/${id}`);

const getUser = id => {
  UserRef(id).on("value", snapshot =>{
    console.log(snapshot.val())
    console.log('data',data)
    return folktale.data.Task.of(data)
  })
}

module.exports = getUser
