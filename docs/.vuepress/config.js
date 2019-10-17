module.exports = {
    base: '/wheels.vue/',
    title: '整挺好(zth) UI',
    description: '一个整挺好的 UI 框架',
    themeConfig: {
        sidebar: [
            {
                title: '开始',
                collapsable: false,
                children: ['/install/','/get-started/',]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                  '/components/grid',
                  '/components/layout',
                  '/components/button',
                  '/components/input',
                  '/components/tabs',
                  '/components/toast',
                ]
            },
        ]
    }
}