const UserRef = firebase.database().ref("users/");
const Task = require('data.task')
const {log} = require('../../utils/index.js')
const R = require('ramda')

const makeArray = obj => {
  let res = Object.keys(obj)
  return myArray = res.map(k => {
  return  [k, obj[k]]
  })
}


const getUsers =
  new Task( (rej, res) =>{
    UserRef.once("value")
    .then( z => z.val() )
    .then( x => makeArray(x) )
      .then(res, rej)
  })


module.exports = {getUsers}
