const m = require('mithril')
const R = require('ramda')
const { task, of } = require('folktale/data/task');
const UserRef = id => firebase.database().ref(`users/${id}`)
const log = x => {
  console.log('x',x)
  return x
}

const getUser = id =>{
  console.log(id )
  UserRef(id).on("value", snapshot =>{
    console.log(snapshot.val())
  })
}

const loader =
  R.compose(log,getUser)


module.exports = loader
