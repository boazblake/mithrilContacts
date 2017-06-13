const AddFbUser = id => firebase.database().ref(`users/${id}`)
const EditFBUser = _ => firebase.database().ref(`users/`)


const editUser = data => {
  EditFBUser(data.id).update(
    { firstName:  data.firstName
    , lastName:   data.lastName
    , profilePic: data.profilePic
    })
    console.log('editing user success', data);
}

const addUser = data => {
  AddFbUser(data)
  console.log('adding user success', data);
}
