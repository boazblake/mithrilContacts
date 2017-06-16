const m = require('mithril')

const UserList = require('./components/users/view.js')
const editContact = require('./components/user/view.js')
const addContact = require('./components/user/view.js')
const Layout = require('./templates/Layout')

m.route(document.body, '/list', {

  '/list': {
    render: function () {
      return m(Layout, m(UserList))
    }
  },

  '/edit/:id': {
    render: function (vnode) {
      return m(Layout, m(editContact, vnode.attrs))
    }
  },

  '/new': {
    render: function () {
      return m(Layout, m(addContact))
    }
  }

})
