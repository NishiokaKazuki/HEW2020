# Project HEW2020
`顔認証型自動機コンビニ` の Web Application

## Description
HEW2020 で開発する `顔認証型自動機コンビニ` のWeb Application. コンビニと連携したユーザ情報や店舗情報などが閲覧可能.
- Backend
  - Go
- Frontend
  - React
  - TypeScript

## Directory
- server
    - `Go`で実装したAPI。
- client
    - `React`+`TypeScript`で実装したUI。
- proxy
    - `envoy`の設定ファイル。
- mysql
    - DBで使用する`SQL`を格納。
- protobuf
    - gRPCの通信内容を`Protocol Buffers`で定義。

## Usage
**Run API server :**
```
cd server &&\
go run main.go
```
**Run React App :**
```
cd client &&\
yarn start
```

## Install
```Git
git clone https://github.com/NishiokaKazuki/HEW2020.git
```

## Author
- Backend
  - [@kazuking_93](https://twitter.com/kazuking_93)
- Frontend + AWS
    - [@KHiroki86_](https://twitter.com/KHiroki86_)

## License
[MIT license](https://b4b4r07.mit-license.org/)
