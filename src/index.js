var m = require("mithril")

var UserList = require("./components/users/view.js")
var UserForm = require("./components/user/view.js")
var Layout = require("./views/Layout")

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
