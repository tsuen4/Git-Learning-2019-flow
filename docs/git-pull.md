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

今回のワークでは発生しないと思われますが、Git には`コンフリクト(conflict)`という状態があります。
コンフリクトとはマージする時に、変更同士が衝突する状態の事を指します。
衝突した変更に対して、Git ではどちらを採用するかの判断ができないので、
ユーザーがどちらを採用するかを選択することで解消できます。

<!-- 図 -->

マージした時にコンフリクトすると、以下のように出力されます。
ここでは、README.md がコンフリクトを起こしている状態となります。

```bash
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

コンフリクト時に `git status` で現在の状態を出力させると、マージされていないファイルの名前が表示されます。
ここからコンフリクトを解消してマージするか、マージそのものをキャンセルするかを選ぶことができます。

```bash{5-7}
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.md
```

::: tip マージをキャンセルするには

`git merge --abort` を実行することでキャンセルできます。
キャンセル後に `git status` を実行すると、マージする前の状態に戻っていることがわかります。

:::

### コンフリクトの解消

コンフリクトを解消するには、

- 現在のブランチの変更のみを保持する
- 他のブランチの変更のみを保持する
- 両方のブランチからの変更を組み込む

の 3 種類から選ぶことになります。
コンフリクトを起こしたファイルを開くと、衝突を起こした箇所に衝突マーカーと呼ばれる三種類のマーカーが追加されています。(`<<<<<<<`, `=======`, `>>>>>>>`)

```bash
# conflict test

<<<<<<< HEAD
- master ブランチでの変更
=======
- hoge ブランチでの変更
>>>>>>> hoge

```
