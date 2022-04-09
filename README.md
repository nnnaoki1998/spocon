# spocon

## 起動準備

### dockerコンテナをビルド
```
$ docker-compose build
```

### reactで利用するライブラリ
```
$ npm --prefix ui install
```

## 起動

### dockerでrails起動
```
$ docker-compose up
```

### react起動
```
$ npm --prefix ui run start
```
