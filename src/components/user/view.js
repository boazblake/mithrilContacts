const m = require("mithril")
const User = require("./index.js")


const UserForm = {
  oninit: vnode => {vnode.attrs.id? User.edit(vnode.attrs.id) : User.add()},
  view: function() {
    return User.state.current
      ? m("form", {
        onsubmit: function(e) {
          e.preventDefault()
          User.save()
        }
      }, [

        m("label.label", "First name"),
        m("input.input[type=text][placeholder=First name][required=true]", {
          oninput: m.withAttr("value", value => User.state.updatedUserObject.firstName = value),
          value: User.state.updatedUserObject.firstName
            ? User.state.updatedUserObject.firstName
            : User.state.current.firstName
              ? User.state.current.firstName
              : ""}),

        m("label.label", "Last name"),
        m("input.input[placeholder=Last name][required=true]", {
          oninput: m.withAttr("value", value => User.state.updatedUserObject.lastName = value),
          value: User.state.updatedUserObject.lastName
            ? User.state.updatedUserObject.lastName
            : User.state.current.lastName
              ? User.state.current.lastName
              : ""}),

        m("label.label", "profile pic"),
        m("img", {src:User.state.current.profilePic
          ? User.state.current.profilePic
          : User.state.updatedUserObject.profilePic
            ? User.state.updatedUserObject.profilePic
            : ""}),

        m("button.button",{ class:"c-button c-button--error", onclick:m.withAttr("userId", User.deleteUser )
          , userId:User.state.updatedUserObject.id}, "X"),

        m("button.button[type=submit]",{class: "c-button button-brand"},"Save"),
      ])  : "LOADING"
  }
}

module.exports = UserForm
