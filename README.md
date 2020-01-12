# Project HEW2020
`顔認証型自動機コンビニ` の Web Application

## Description
HEW2020 で開発する `顔認証型自動機コンビニ` のWeb Application. コンビニと連携したユーザ情報や店舗情報などを閲覧可能.
- Backend
  - Go
- Frontend
  - React

## Directory
- server
    - `Go`で実装したAPI。
- client
    - `React`で実装したView。
- docker 
    - `docker-compose`を格納。
- mysql
    - Docker上のDBへの`SQL`。
- protobuf
    - gRPCの通信内容を`Protocol Buffers`で定義。

## Usage
**Run API server :**
```
cd api-server &&\
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
"Project HEW2020" is under [MIT license](https://b4b4r07.mit-license.org/).