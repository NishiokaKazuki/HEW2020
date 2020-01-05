package main

import (
	"context"
	"log"
	"time"

	"api-server/generated/messages"
	pb "api-server/generated/services"

	"google.golang.org/grpc"
)

const (
	host = "localhost:49200"
)

func main() {
	conn, err := grpc.Dial(host, grpc.WithInsecure())
	if err != nil {
		log.Fatalln("failrd connect: %s", err)
	}
	defer conn.Close()

	client := pb.NewWebAppServiceClient(conn)

	// タイムアウトを1秒に設定する
	context, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()

	res, err := client.User(context, &messages.UserRequest{
		Token: "test",
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("%#v\n", res.User.Name)
	log.Println(res)
}
