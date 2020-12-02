const heading = {
    install(Vue, options) {
        // <h3> <svg><use xlink:use='#/icon-xxx'></use></svg> </h3>
        Vue.component('heading', {
            functional: true,
            render(h, context) {
                let children = []
                const {level, title, icon} = context.props
                if (icon) {
                    children.push(h('svg'), {}, [
                        h('use', { attrs: {'xlink:use': icon } })
                    ])
                    children = children.concat(context.children)
                }
                return h('h' + level, { attrs: { title: title } }, children)
            }
        })
    }
}

if (window !== undefined && window.Vue) {
    window.Vue.use(heading)
}