package main

import (
	"context"
	"log"
	"os"
	"strconv"
	"time"

	"api-server/generated/enums"
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
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*20)
	defer cancel()

	sw := os.Args
	switch sw[1] {
	case "user":
		user(ctx, client)
	case "store":
		store(ctx, client)
	case "signup":
		signup(ctx, client)
	case "signin":
		signin(ctx, client)
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
	args := os.Args
	res, err := client.User(ctx, &messages.UserRequest{
		Token: args[2],
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("%#v\n", res.User.Name)
	log.Println(res)
}

func signup(ctx context.Context, client pb.WebAppServiceClient) {
	_, err := client.SignUp(ctx, &messages.SignUpRequest{
		Name:   "NewAccount",
		Sex:    enums.SexTypes_SEX_MALE,
		Age:    18,
		UserId: "NewAccount",
		UserPw: "pass_1",
	})
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.User(ctx, &messages.UserRequest{
		Token: "test",
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Println(res)
}

func signin(ctx context.Context, client pb.WebAppServiceClient) {
	args := os.Args
	res, err := client.SignIn(ctx, &messages.SignInRequest{
		UserId: args[2],
		UserPw: args[3],
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Println(res.Token)
}
