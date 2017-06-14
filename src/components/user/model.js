const EditFBUser = id => firebase.database().ref(`users/${id}`)
const getKey = _ => firebase.database().ref().child(`users/`).push().key
const { log, UserMaker } = require('../../utils/index.js')

export const editUser = data => {
  EditFBUser(data.id).update(
    { firstName:  data.firstName
    , lastName:   data.lastName
    , profilePic: data.profilePic
  }).then(x => console.log('editing user success', data))

}

export const addUser = data => {
  data.id = getKey()
  return EditFBUser(data.id).set(data)
}
