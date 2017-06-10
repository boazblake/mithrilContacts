var m = require("mithril")

const Layout = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu ", {class:'c-nav c-nav--inline c-nav--light'},[
                m("a[href='/list']", {oncreate: m.route.link, class:'c-nav__item'}, "CONTACTS")
            ]),
            m("section", vnode.children)
        ])
    }
}


module.exports = Layout
