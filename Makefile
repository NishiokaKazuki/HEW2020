
run-api-server:
	cd api-server &&\
	go run main.go

protoc-api-server:
	protoc -I protobuf/ protobuf/enums.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/messages.proto --go_out=plugins=grpc:./
	protoc -I protobuf/ protobuf/web_app_service.proto --go_out=plugins=grpc:./
