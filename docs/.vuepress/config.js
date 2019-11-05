module.exports = {
    base: '/wheels.vue/',
    title: 'zth UI',
    description: '一个 Vue 的 UI 框架',
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '组件', link: '/components/icon' },
          { text: 'GitHub', link: 'https://github.com/dogezhou/wheels.vue' },
        ],      
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
                  '/components/icon',
                  '/components/grid',
                  '/components/layout',
                  '/components/button',
                  '/components/input',
                  '/components/tabs',
                  '/components/toast',
                  '/components/popover',
                  '/components/collapse',
                  '/components/cascader',
                ]
            },
        ]
    }
}