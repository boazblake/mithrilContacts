const m = require('mithril')
const R = require('ramda')
const folktale = require('folktale');

var UserRef = id => firebase.database().ref(`users/${id}`);

export const load = id => {
  UserRef(id).on("value", snapshot =>{
    data = snapshot.val()
    console.log('data',data)
    return folktale.data.Task.of(data)
  })
}