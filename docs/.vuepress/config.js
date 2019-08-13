module.exports = {
    title: 'OneMore',
    description: '一个前端新人做着玩的移动端UI库',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ],      
          sidebar: [
            { 
                title: '快速使用',
                collapsable: false,
                children: [
                 '/install/',
                 '/start/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                  '/components/button/',
                ]
              },
          ]
      }
}