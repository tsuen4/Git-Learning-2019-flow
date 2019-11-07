# リモート先から変更を取得する (pull)

リモート先の変更をローカルに直接マージするには pull コマンドを使います。
`git pull リモート先 リモート先のブランチ名` コマンドで取得してみましょう。
何も変更がなければ `Already up-to-date` と表示されます。。

```bash
# マージさせたいブランチ上で
git pull origin master
```

## pull の実態

pull コマンドの実態は fetch と merge の 2 つのコマンドの組み合わせです。
以下は、 fetch コマンドでリモート先の変更をローカルに取得し、それを現在いるブランチにマージする例です。

```bash
# リモート先の変更を取得
git fetch origin
# 取得した master を現在いるブランチにマージ
git merge origin/master
```

## コンフリクト
