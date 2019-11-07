module.exports = {
  base: '/flow/',
  title: 'OECU-Git-Learning: GitHub Flow',
  markdown: {
    config: (md) => {
      md.options.linkify = true
    }
  },
  themeConfig: {
    sidebar: [
      '/',
      '/github-flow',
      '/git-pull',
    ],
    displayAllHeaders: true,
    search: false
  }
}