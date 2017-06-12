const m = require("mithril")

const UserList = require("./components/users/view.js")
const UserForm = require("./components/user/view.js")
const Layout = require("./templates/Layout")

m.route(document.body, "/list", {

    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    },

    "/edit/:id": {
      render: function(vnode) {
        return m(Layout, m(UserForm, vnode.attrs))
      }
    },

})
