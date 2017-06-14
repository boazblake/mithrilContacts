const EditFBUser = id => firebase.database().ref(`users/${id}`)
const AddFbUser = _ => firebase.database().ref(`users/`)
const { log, UserMaker } = require('../../utils/index.js')

export const editUser = data => {
  EditFBUser(data.id).update(
    { firstName:  data.firstName
    , lastName:   data.lastName
    , profilePic: data.profilePic
  }).then(x => console.log('editing user success', data))

}

export const addUser = data => {
  console.log('adding a a user')
  // use data to create a hash for id
  // UserMaker(data)
  return AddFbUser().push(data)
}
