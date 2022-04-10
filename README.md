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
