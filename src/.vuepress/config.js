const { description } = 'Bar restaurante · Comida tradicional · San Sebastián de los Reyes (Madrid)'
let ogprefix = 'og: http://ogp.me/ns#'

module.exports = {
  title: 'V. Arranz',
  description: description,
  head: [
    ['link', {rel: 'icon', href: './favicon.png'}],
    ['meta', {prefix: ogprefix, property: 'og:description', content: description}],
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}],
    ['meta', { name: 'theme-color', content: '#f13266' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', {prefix: ogprefix, property: 'og:type', content: 'website'}],
    ['meta', {prefix: ogprefix, property: 'og:url', content: 'https://www.varranz.com/'}],
  ],

  themeConfig: {
    logo: '/logo-v-arranz.png',
    docsDir: 'src',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Carta',
        link: '/carta/'
      },
      {
        text: 'Restaurante',
        link: '/restaurante/'
      },
      {
        text: 'Contacto',
        link: '/contacto/'
      }
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

}
