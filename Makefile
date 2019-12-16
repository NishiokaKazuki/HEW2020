
run-api-server:
	cd api-server &&\
	go run main.go

protoc-api-server:
	protoc -I protobuf/ protobuf/enums.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/functions.proto --go_out=plugins=grpc:./
