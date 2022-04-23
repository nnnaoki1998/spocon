# spocon

## 起動準備

### dockerコンテナをビルド
```
$ docker-compose build
```

### フロントエンドで利用するライブラリ
```
$ npm --prefix ui install
```

## 起動

### dockerでrails起動
起動後､`http://127.0.0.1:3000/`で動作する
```
$ docker-compose up rails
```

### dockerでフロントエンド起動
```
$ docker-compose up react
```

## コード整形

### フロントエンド
```
$ npm --prefix ui run fmt
```
