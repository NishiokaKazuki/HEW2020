# Project HEW2020
HEW2020で開発する`無人コンビニ` の Web Application.

## Description
HEW2020 で開発する `無人コンビニ` のWeb Application. No checkouts のコンビニと連携して、ユーザ情報や店舗情報などを閲覧可能にする.

## Install
```Git
git clone https://github.com/NishiokaKazuki/HEW2020.git
```

## Usage
*Protocol Buffersから各言語のソースを生成*
```Makefile
make protoc-client &&\
make protoc-server &&\
make protoc-py
```
```
make disable-eslint
```
*Containerの起動*
```Makefile
make docker-up
```
DBの初期化
```Makefile
make docker-init-db
```

## Technologies
- Frontend
  - React
  - TypeScript
- Backend
  - Go
- Infrastructure
  - Python
  - AWS
  - Kubernetes
- Others
  - gRPC
  - Envoy Proxy

## Directory
- client
    - `React`+`TypeScript`のUI
- server
    - `Go`のAPI Server
- mechanical
    - `Python`の組み込み
- proxy
    - `Envoy Proxy`の設定ファイル
- mysql
    - MySQLの`SQL`
- protobuf
    - gRPCの通信内容を定義した`Protocol Buffers`

## Author
- Backend
    - [@kazuking_93](https://twitter.com/kazuking_93)
- Frontend
    - [@KHiroki86_](https://twitter.com/KHiroki86_)

## License
[MIT license](https://b4b4r07.mit-license.org/)
