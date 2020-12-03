// heading插件
const heading = {
    // 注册插件，需暴露一个install方法
    install(Vue, options) {
        // heading 最终渲染结果：<h3 title='xxx'><svg><use xlink:use='xxx'></use></svg> xxx </h3>
        Vue.component('heading', {
            functional: true, // 函数式组件（无状态组件）
            render(h, context) {
                const {title, level, icon} = context.props
                let children = []

                if (icon) {
                    children.push(h('svg', {}, [
                        h('use', {
                            attrs: {
                                'xlink:use': icon
                            }
                        })
                    ]))

                    children = children.concat(context.children) // context.children: h 子元素， slots
                }

                return h('h' + level, {
                    attrs: {
                        title: title
                    }
                }, children)
            }
        })

    }
}

if (typeof window !== 'undefined' && window.Vue) {
    // 使用插件
    window.Vue.use(heading)
}