 # Project HEW2020
 このプロジェクトはHEW2020で作成する`顔認証型自動機コンビニ`のためのWebAppになります。ユーザ情報や店舗情報の閲覧などが可能です。

 ## ディレクトリ説明
 - api-server
    - `Golang`で開発されたAPIサーバーです。gRPCを利用しています。
- docker 
    - docker-composeの設定ファイルが入っています。
- mysql
    - docker上で稼働するDBの`SQL`が入っています。
- protobuf
    - gRPCの通信内容を`Protocol Buffers`を利用し定義しています。
- web-app
    - `React`で実装されたWebAppです。

docker-compose exec mysql bash -U root -d hew2020