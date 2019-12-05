module.exports = {
  base: '/flow/',
  title: 'Git-Learning: GitHub Flow',
  head: [
    // <meta name="robots" content="noindex">
    ['meta', { name: 'robots', content: 'noindex' }]
  ],
  markdown: {
    config: (md) => {
      md.options.linkify = true
    }
  },
  themeConfig: {
    sidebar: [
      '/joint-development',
      '/github-flow-1',
      '/exercise',
      '/github-flow-2',
      '/git-pull',
    ],
    displayAllHeaders: true,
    search: false
  }
}