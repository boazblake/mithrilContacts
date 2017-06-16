const EditFBUser = id => firebase.database().ref(`users/${id}`)
const getKey = _ => firebase.database().ref().child(`users/`).push().key
const { log, UserMaker } = require('../../utils/index.js')

export const editUser = data => {
  log("editing User")
  return EditFBUser(data.id).update(
    { firstName:  data.firstName
      , lastName:   data.lastName
      , profilePic: data.profilePic
    })

}

export const addUser = (data, pic) => {
  data.id = getKey()
  data.profilePic = pic
  data.firstName === undefined
    ? data.firstName = "__"
    : data.firstName = data.firstName
  data.lastName === undefined
    ? data.lastName = "__"
    : data.lastName = data.lastName

console.log("adding userUser", data)

  return EditFBUser(data.id).set(data)
}
