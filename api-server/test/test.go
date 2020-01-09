package main

import (
	"context"
	"log"
	"os"
	"strconv"
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

	// タイムアウトを20秒に設定する
	context, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	sw := os.Args
	switch sw[1] {
	case "user":
		user(context, client)
	case "store":
		store(context, client)
	}
}

func store(ctx context.Context, client pb.WebAppServiceClient) {
	args := os.Args
	if len(args) < 2 {
		log.Fatalln("no more args")
	}
	id, _ := strconv.Atoi(args[2])

	res, err := client.Store(ctx, &messages.StoreRequest{
		Token: "test",
		Id:    uint64(id),
	})
	if err == nil {
		log.Println(res)
		log.Printf("%#v\n", res.Company.Name)
		for _, product := range res.Products {
			log.Printf("%#v\n", product.Name)
		}
		log.Println(len(res.Products))
		// log.Println(res.Company)
		// log.Println(res.Products)
	} else {
		log.Println(err)
	}
}

func user(ctx context.Context, client pb.WebAppServiceClient) {
	res, err := client.User(ctx, &messages.UserRequest{
		Token: "test",
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("%#v\n", res.User.Name)
	log.Println(res)
}
