const m = require('mithril')
const User = require('./index.js');


const UserForm = {
  oninit: vnode => User.load(vnode.attrs.id),
  view: function() {
        return User.current? m("form", {
                onsubmit: function(e) {
                  e.preventDefault()
                  User.save()
                }
            }, [

            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", value => User.updatedUserObject.firstName = value),
                value: User.updatedUserObject.firstName? User.updatedUserObject.firstName : User.current.firstName
            }),

            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", value => User.updatedUserObject.lastName = value),
                value: User.updatedUserObject.lastName ? User.updatedUserObject.lastName : User.current.lastName
            }),

            m("label.label", "profile pic"),
            m("img", {src:User.current.profilePic}),


            m("button.button[type=submit]",{class: "c-button button-brand"},"Save"),
        ])  : "LOADING"
    }
}

module.exports = UserForm
