package controller

import (
	"api-server/controller/query"
	"api-server/generated/enums"
	"api-server/generated/messages"
	pb "api-server/generated/services"
	"api-server/model/table"
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct{}

func (s *server) Auth(ctx context.Context, in *messages.AuthRequest) (*messages.AuthResponse, error) {

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      "test",
	}, nil
}

func (s *server) SignIn(ctx context.Context, in *messages.SignInRequest) (*messages.AuthResponse, error) {

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      "test",
	}, nil
}

func (s *server) SignUp(ctx context.Context, in *messages.SignUpRequest) (*messages.AuthResponse, error) {

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      "XXXX1234",
	}, nil
}

func (s *server) SignOut(ctx context.Context, in *messages.SignOutRequest) (*messages.AuthResponse, error) {

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      "",
	}, nil
}

func (s *server) User(ctx context.Context, in *messages.UserRequest) (*messages.UserResponse, error) {
	var (
		user table.AppUsers
	)

	user, err := query.GetUser(ctx, 1) // id is dummy
	if err != nil {
		return &messages.UserResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
			User:       &messages.UserResponse_AppUser{},
		}, nil
	}

	return &messages.UserResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		User: &messages.UserResponse_AppUser{
			Id:   user.Id,
			Name: user.Name,
			Sex:  user.Sex,
			Age:  user.Age,
		},
	}, nil
}

func (s *server) Stores(ctx context.Context, in *messages.StoresRequest) (*messages.StoresResponse, error) {
	var (
		stores    []*messages.StoresResponse_Store
		companies []*messages.StoresResponse_Company
	)

	return &messages.StoresResponse{
		Status:      true,
		StatusCode:  enums.StatusCodes_SUCCESS,
		Stores:      stores,
		Companies:   companies,
		Pages:       1,
		CurrentPage: 1,
	}, nil
}

func (s *server) Store(ctx context.Context, in *messages.StoreRequest) (*messages.StoreResponse, error) {
	var (
		store   *messages.StoreResponse_Store
		company *messages.StoreResponse_Company
	)

	return &messages.StoreResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Store:      store,
		Company:    company,
	}, nil
}

func (s *server) Product(ctx context.Context, in *messages.ProductRequest) (*messages.ProductResponse, error) {
	var (
		product table.Products
	)

	product, err := query.GetProduct(ctx, in.Id)
	if err != nil {
		return nil, err
	}

	return &messages.ProductResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Id:         product.Id,
		Name:       product.Name,
		Price:      product.Price,
		Type:       product.Type,
	}, nil
}

func (s *server) ClearingHistory(ctx context.Context, in *messages.ClearingHistoryRequest) (*messages.ClearingHistoryResponse, error) {
	var (
		history *messages.ClearingHistoryResponse_Clearing
	)

	return &messages.ClearingHistoryResponse{
		Status:          true,
		StatusCode:      enums.StatusCodes_SUCCESS,
		ClearingHistory: history,
		Pages:           1,
		CurrentPage:     1,
	}, nil
}

func StartingServer(port string) {
	listenPort, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err)
	}

	s := grpc.NewServer()
	pb.RegisterWebAppServiceServer(s, &server{})

	log.Println("startingserver", port)
	err = s.Serve(listenPort)
	if err != nil {
		log.Fatal("failed open", port)
	}
}
