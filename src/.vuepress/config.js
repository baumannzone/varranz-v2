const { description } = 'Bar restaurante · Comida tradicional'

module.exports = {
  title: 'V. Arranz',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#d41441' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/baumannzone/varranz-v2',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Carta Online',
        link: '/carta'
      },
      {
        text: 'Restaurante',
        link: '/restaurante'
      },
      {
        text: 'Contacto',
        link: '/contacto'
      }
    ],
    // sidebar: {
    //   '/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    // }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
