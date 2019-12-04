---
lang: ja
---

# GitHub Flow を用いて既存のプロジェクトに参加してみよう (1/2)

実際に GitHub Flow を用いて、既存のプロジェクトに変更を加えてみましょう。この演習は「フォークとプルモデル」をベースに構成されています。最終的な全体像は以下のようになります。

<img :src="$withBase('/assets/overall.png')" alt="overall">

今回の作業は

- 既存のリポジトリのフォークしてクローン
- 元のリポジトリと接続
- 編集用にブランチを作る
- 演習課題
- ブランチをプッシュ
- プルリクエストの作成

の順に行われます。

## フォークとクローン

GitHub 上にあるリポジトリをローカルにダウンロードするには、 `クローン(clone)` という操作をします。
しかし、他人のリポジトリに**参加する前提**でダウンロードするには、事前に `フォーク(fork)` する必要があります。
フォークすると、自分のアカウント上にリポジトリのコピーが生成され、それをクローンすることで貢献できる状態になります。

<img :src="$withBase('/assets/fork_clone.png')" alt="fork and clone">

今回使用するリモートリポジトリは <https://github.com/tsuen4/To-do-List> です。
リンク先のリポジトリにアクセスして、

- 右上の fork ボタンを押してフォーク
  - フォークが完了してページ遷移後の URL に自分のアカウント名が含まれているか確認
- フォークされたら、画面の右中央にある `[Clone or download]` からリポジトリの URL をコピー
- `git clone <URL>` コマンドでローカルにクローン
- リポジトリ名のディレクトリ内に入る

::: tip リポジトリに自分のアカウント名が含まれていなかったら

- 画面右上のユーザーアイコンのメニューから `Your repositories` でリポジトリ一覧を表示
- **To-do-List** にアクセス

:::

```bash
git clone コピーしたURL
cd To-do-List # クローンしてきたリポジトリのディレクトリに入る
```

## 元のリポジトリと接続

クローンしてきたリポジトリには、クローン元に対して自動で `origin` という名前で設定されます。
このリポジトリの `origin` には、フォークしたリポジトリに対して設定されています。

フォーク元が更新された際、フォーク元から直接変更を取得するには、リモート先を追加することで解決できます。クローンした直後に追加しておくと良いでしょう。
フォーク元のリポジトリに対しては `upstream` という名前をつけることが多いです。

<img :src="$withBase('/assets/upstream.png')" alt="upstream">

```bash
git remote add upstream 元のリポジトリのURL
git remote -v # リモート先の確認 origin と upstream が表示されていたら OK!
```

::: tip 間違えてしまった場合

- リモート先の URL を間違えてしまった場合
  - `git remote set-url リモート名 リポジトリのURL`
- リモート先の名前を変えたい場合
  - `git remote rename 元のリモート名 新しいリモート名`

:::

HTTPS の URL を使用している場合は `git remote -v` コマンドで、以下のような出力になります。

```git
origin  https://github.com/自分のアカウント名/To-do-List.git (fetch)
origin  https://github.com/自分のアカウント名/To-do-List.git (push)
upstream  https://github.com/tsuen4/To-do-List.git (fetch)
upstream  https://github.com/tsuen4/To-do-List.git (push)
```

## ブランチ作成

upstream の設定ができたらブランチを作成します。今回は GitHub のユーザー名でつけましょう。

```bash
git branch ユーザー名 # ユーザー名でブランチを作成
git checkout ユーザー名 # 作成したブランチに切り替える
# 'git status' で現在のブランチの確認
```

::: tip ブランチの作成 + 切替のショートカット
checkout コマンドに -b オプションを付けた `git checkout -b ブランチ名` で、作成と切り替えを同時に行うことができます。
:::
