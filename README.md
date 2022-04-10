# spocon

## 起動準備

### docker コンテナをビルド

```
$ docker-compose build
```

### フロントエンドで利用するライブラリ

```
$ npm --prefix ui install
```

## 起動

### docker で rails 起動

```
$ docker-compose up
```

### フロントエンド起動

```
$ npm --prefix ui run start
```

## コード整形

### フロントエンド

```
$ npm --prefix ui run fmt
```
