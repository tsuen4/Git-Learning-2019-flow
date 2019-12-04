module.exports = {
  base: '/flow/',
  title: 'Git-Learning: GitHub Flow',
  head: [
    // ['link', { rel: 'icon', href: '' }]
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