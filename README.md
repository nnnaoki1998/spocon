# spocon

## 起動準備

### dockerコンテナをビルド
```
$ docker-compose build
```

### フロントエンドで利用するライブラリのインストール
```
$ npm --prefix frontend ci --legacy-peer-deps
```

### AWS amplify のソース取得 
```
$ amplify pull // 一回目
$ amplify pull // 二回目: 一回目が成功して「Run 'amplify pull' to sync future upstream changes.」と表示されたら二回目を実行する
```

## 起動

### mysqlコンテナを立ち上げる
```
$ docker-compose up mysql
```
#### ローカルからmysqlへ接続するときのコマンド
```
mysql -p --host=127.0.0.1
```

### dockerでrails起動
起動後､`http://127.0.0.1:3000/`で動作する
```
$ docker-compose up rails
```

### dockerでフロントエンド起動
```
$ docker-compose up react
```

## テスト

### テスト用のMySQLコンテナを起動
```
$ docker-compose up test-mysql
```

### railsのテスト実行
```
$ docker-compose run --rm rails-test rspec spec/requests
```

## コード整形

### ruby
rufoというgemをインストール
```
$ gem install rufo
```

全てのrubyファイルを整形
```
$ rufo .
```

特定のファイルのみ整形
```
$ $ rufo {ファイル名 or ディレクトリ名}
```

### フロントエンド
```
$ npm --prefix frontend run fmt
```
