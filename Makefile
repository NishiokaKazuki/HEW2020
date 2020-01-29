protoc-client:
	cd client &&\
	sh protoc.sh

protoc-server:
	protoc -I protobuf/ protobuf/enums.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/messages.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/web_app_service.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/mechanical_service.proto --go_out=plugins=grpc:./

protoc-py:
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/generated/grpc --grpc_python_out=./mechanical/generated/grpc protobuf/enums.proto
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/generated/grpc --grpc_python_out=./mechanical/generated/grpc protobuf/messages.proto
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/generated/grpc --grpc_python_out=./mechanical/generated/grpc protobuf/mechanical_service.proto

docker-up:
	docker-compose up -d

docker-init-db:
	docker-compose exec db /bin/bash -psecret -c "chmod 0775 docker-entrypoint-initdb.d/init-db.sh" &&\
	docker-compose exec db /bin/bash -psecret -c "sh ./docker-entrypoint-initdb.d/init-db.sh"

docker-stop:
	docker-compose stop

docker-rm:
	docker-compose rm -f &&\
	rm -rf mysql/data/*

docker-ps:
	docker-compose ps

docker-exec-db:
	docker exec -it hew2020-db /bin/bash

docker-exec-client:
	docker exec -it hew2020-client /bin/bash

docker-exec-server:
	docker exec -it hew2020-server /bin/bash

docker-restart:
	docker-compose stop &&\
	docker-compose rm -f &&\
	rm -rf mysql/data/* &&\
	docker-compose up -d

run-client:
	cd client &&\
	yarn install &&\
	yarn start

run-server:
	cd server &&\
	go run main.go

run-py:
	cd mechanical &&\
	python2 main.py
