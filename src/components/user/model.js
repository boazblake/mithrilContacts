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
  console.log("adding userUser", pic)
  data.id = getKey()
  data.profilePic = pic
  return EditFBUser(data.id).set(data)
}
