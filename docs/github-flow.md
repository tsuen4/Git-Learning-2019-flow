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
しかし、他人のリポジトリに**参加する前提**でダウンロードするには、事前に `フォーク(fork)` する必要があります。
フォークすると、自分のアカウント上にリポジトリのコピーが生成され、それをクローンすることで貢献できる状態になります。

<img :src="$withBase('/assets/fork_clone.png')" alt="GitHub Flow">

今回使用するリモートリポジトリは <https://github.com/oecu-class-advanced-cpp2/To-do-List> です。
リンク先のリポジトリにアクセスして、

- 右上の fork ボタンを押してフォーク
- フォーク先を自分のアカウントに
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

クローンしてきたたリポジトリには、クローン元に対して自動で `origin` という名前で設定されます。
このリポジトリの `origin` には、フォークしたリポジトリに対して設定されているので、
フォーク元のリポジトリの変更も pull (取得)するために、別のリモート先を追加しましょう。
フォーク元のリポジトリに対しては `upstream` という名前をつけることが多いです。

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

HTTPS の URL を使用している場合は `git remote -v` コマンドで、以下のような出力になります。

```git
origin  https://github.com/oecu-class-advanced-cpp2/To-do-List.git (fetch)
origin  https://github.com/oecu-class-advanced-cpp2/To-do-List.git (push)
upstream  https://github.com/自分のアカウント名/To-do-List.git (fetch)
upstream  https://github.com/自分のアカウント名/To-do-List.git (push)
```

## ブランチを作って作業

upstream の設定ができたらブランチを作成します。今回は学籍番号でつけてみましょう。

```bash
git branch ht99a999 # 学籍番号の名前でブランチを作成
git checkout ht99a999 # 作成したブランチに切り替える
# 'git status' で現在のブランチの確認
```

ブランチを切り替えたら、 <https://github.com/oecu-class-advanced-cpp2/To-do-List> の [README.md](https://github.com/oecu-class-advanced-cpp2/To-do-List/blob/master/README.md) と [document.md](https://github.com/oecu-class-advanced-cpp2/To-do-List/blob/master/document.md) に書いてある方法で作業を始めましょう。

::: tip ブランチの作成 + 切替のショートカット
checkout コマンドに -b オプションを付けた `git checkout -b ブランチ名` で、作成と切り替えを同時に行うことができます。
:::

## ブランチをプッシュ

**作成・編集したファイルをコミット**して、定期的にリモートリポジトリにブランチをプッシュしておきましょう。

```bash
# origin というリモート先に学籍番号の名前のブランチを送信
git push origin ht99a999
```

::: tip ブランチ名を入力するのが面倒な場合
`git push origin HEAD` とすることで、**現在いるブランチ**をプッシュできます。
:::

## プルリクエストの作成

<img :src="$withBase('/assets/GitHub-Flow.png')" alt="GitHub Flow">

プルリクエストは、助言が欲しい時や、ブランチをマージしても良いと思ったときに立てます。
立てるにはブランチをプッシュした後に GitHub で、

- フォーク元のリポジトリか自分のリポジトリを参照
- 黄色い枠の「Your recently pushed branches （最近プッシュされたブランチ）」があることを確認
- 右側の `[Compare & pull request]` を選択して `プルリクエスト(pull request)` を作成

を行います。

::: tip [Compare & pull request] が表示されていない場合

- ファイル一覧の上にある [New pull request] を選択
- `[base: master] ← [compare: master]` の `[compare: master]` をプッシュしたブランチに変更

:::

プルリクエストの作成画面では、タイトルと説明の入力欄が表示されます。
入力欄の下には、プルリクエストに関連するコミットとマージ先との差分が表示されます。

元リポジトリのオーナーにプル（確認）してもらうために、変更内容を記入しましょう。
入力したら `[Create pull request]` で作成します。
オーナーがレビューして何も問題がなければマージされ、問題があればプルリクエストのページでやり取りが行われます。
マージされたら、あなたの変更が元のプロジェクトに反映されます！

**ワークはこれで終了です。お疲れさまでした。**
