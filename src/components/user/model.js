/* global firebase */
/* eslint no-undef: "error" */
const EditFBUser = id => firebase.database().ref(`users/${id}`)
const getKey = () => firebase.database().ref().child("users/").push().key

export const editUser = data => {
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

  return EditFBUser(data.id).set(data)
}
