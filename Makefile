
run-api-server:
	cd api-server &&\
	go run main.go

run-py:
	cd mechanical &&\
	python2 main.py

protoc-server:
	protoc -I protobuf/ protobuf/enums.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/messages.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/web_app_service.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/mechanical_service.proto --go_out=plugins=grpc:./

protoc-py:
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/libs/generated/grpc --grpc_python_out=./mechanical/libs/generated/grpc protobuf/enums.proto
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/libs/generated/grpc --grpc_python_out=./mechanical/libs/generated/grpc protobuf/messages.proto
	python -m grpc_tools.protoc -I protobuf/ --python_out=./mechanical/libs/generated/grpc --grpc_python_out=./mechanical/libs/generated/grpc protobuf/mechanical_service.proto

docker-up:
	cd docker &&\
	docker-compose up -d

docker-init-db:
	cd docker &&\
	docker-compose exec db bash -psecret -c "chmod 0775 docker-entrypoint-initdb.d/init-db.sh" &&\
	docker-compose exec db bash -psecret -c "sh ./docker-entrypoint-initdb.d/init-db.sh"

docker-stop:
	cd docker &&\
	docker-compose stop

docker-rm:
	cd docker &&\
	docker-compose rm -f
	rm -rf mysql/data/*

docker-ps:
	cd docker &&\
	docker-compose ps

docker-exec:
	cd docker &&\
	docker exec -it hew bash

docker-restart:
	cd docker &&\
	docker-compose stop &&\
	docker-compose rm -f &&\
	rm -rf mysql/data/* &&\
	docker-compose up -d

