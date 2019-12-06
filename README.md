# Git-Learning (GitHub Flow)

- GitHub Flow を用いて既存のリポジトリに変更を加えられるようにすることが目的
- 静的サイトジェネレーターの [VuePress](https://vuepress.vuejs.org/) を使用
- docs に Markdown ファイルを配置
  - `docs/.vuepress/config.js` の sidebar 配列にファイル名を追加することで目次が生成される

## Project setup

```bash
npm install
```

## development

```bash
npm run dev
```

## build

`docs/.vuepress/dist/` にサイトが生成される。

```bash
npm run build
```
