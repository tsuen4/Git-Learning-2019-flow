---
lang: ja
---

# GitHub Flow を用いて既存のプロジェクトに参加してみよう

実際に GitHub Flow を用いて、既存のプロジェクトに変更を加えてみましょう。

今回の作業は

- 既存のリポジトリのフォーク(fork)してクローン(clone)
- 編集用にブランチを作って作業
- ブランチをプッシュ(push)
- プルリクエスト(Pull Request)の作成

の順に行われます。

## フォークとクローン

GitHub 上にあるリポジトリをローカルにダウンロードするには、 `クローン(clone)` という操作をします。
しかし、他人のリポジトリに**貢献する前提**でダウンロードするには、事前に `フォーク(fork)` する必要があります。
フォークすると、自分のアカウント上にリポジトリのコピーが生成され、それをクローンすることで貢献できる状態になります。

<img :src="$withBase('/assets/fork_clone.png')" alt="GitHub Flow">


今回使用するリモートリポジトリは <https://github.com/oecu-class-advanced-cpp2/To-do-List> です。
リンク先のリポジトリにアクセスして、右上の fork ボタンを押してフォークしましょう。
フォークが成功したら、 GitHub の自分のユーザーページにある、**To-do-List** というリポジトリにアクセスします。
そして、画面の右中央にある `[Clone or download]` をクリックしてリポジトリの URL をコピーし、
`git clone <URL>` コマンドでローカルにクローンしましょう。
クローンしてきたたリポジトリには、`origin` という名前でリモート先が自動で設定されます。

```bash
git clone コピーしたURL
```

## 元のリポジトリと接続

クローンした後の origin には、フォークされたリポジトリに対して設定されています。
元のリポジトリの変更も pull (取得)するために、別のリモート先を追加しましょう。
元のリポジトリに対しては `upstream` という名前をつけることが多いです。

```bash
git remote add upstream 元のリポジトリのURL
git remote -v # リモート先の確認 origin と upstream が表示されていたら OK!
```

::: tip 間違えてしまった場合

- リモート先の URL を間違えてしまった場合
  - `git remote set-url リモート名 元のリポジトリのURL`
- リモート先の名前を変えたい場合
  - `git remote rename 元のリモート名 新しいリモート名`

:::

## ブランチを作って作業

クローンに成功したら、カレントディレクトリにリポジトリ名のディレクトリが作成されます。
その中に入り、ブランチを切りましょう。今回は学籍番号でつけてみましょう。

```bash
cd To-do-List # クローンしてきたリポジトリに入る
git branch ht17a000 # 学籍番号の名前でブランチを作成
git checkout ht17a000 # 作成したブランチに切り替える
# 'git status' で現在のブランチの確認
```

ブランチを切り替えたら、 <https://github.com/oecu-class-advanced-cpp2/To-do-List> の [README.md](https://github.com/oecu-class-advanced-cpp2/To-do-List/blob/master/README.md) と [document.md](https://github.com/oecu-class-advanced-cpp2/To-do-List/blob/master/document.md) に書いてある方法で作業を始めましょう。

::: tip ブランチの作成 + 切替のショートカット
checkout コマンドに -b オプションを付けた `git checkout -b ブランチ名` で、作成と切り替えを同時に行うことができます。
:::

## ブランチをプッシュ

作成・編集したファイルをコミットして、定期的にリモートリポジトリにブランチをプッシュしておきましょう。

```bash
# origin というリモート先に学籍番号の名前のブランチを送信
git push origin ht17a000
```

::: tip ブランチ名を入力するのが面倒な場合
`git push origin HEAD` とすることで、現在いるブランチをプッシュできます。
:::

## プルリクエストの作成

プルリクエストは、助言が欲しい時や、ブランチをマージしても良いと思ったときに立てます。
立てるにはブランチをプッシュした後、フォーク元のリポジトリか自分のリポジトリを参照しに行きましょう。
画面上部に「最近プッシュされたブランチ」が表示されるので、
右側の `[Compare & pull request]` を選択して `プルリクエスト(pull request)` を作成しましょう。

::: tip [Compare & pull request] が出ない場合

- ファイル一覧の上にある [New pull request] を選択
- `[base repository: hoge][base: master] ← [head repository: user/hoge][compare: master]` の `[compare: master]` をプッシュしたブランチに変更

:::

---

プルリクエストの作成画面では、タイトルと説明の入力欄が表示されます。
入力欄の下には、プルリクエストに関連するコミットとマージ先との差分が表示されます。

元リポジトリのオーナーにプル(確認)してもらうために、変更内容記入しましょう。
入力したら `[Create pull request]` を選択して完了です。
元リポジトリのオーナーにマージされたら、
あなたの変更が元のプロジェクトに反映されます！
