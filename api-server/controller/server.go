package controller

import (
	"api-server/generated/enums"
	"api-server/generated/messages"
	"api-server/generated/services"
	"context"
)

type server struct {
	services.UnimplementedWebAppServiceServer
}

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

func (s *server) SignOut(ctx context.Context, in *messages.SignUpRequest) (*messages.AuthResponse, error) {

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      "",
	}, nil
}

func (s *server) User(ctx context.Context, in *messages.UserRequest) (*messages.UserResponse, error) {

	return &messages.UserResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		User: &messages.UserResponse_AppUser{
			Id:   1,
			Name: "test",
			Sex:  enums.SexTypes_SEX_MALE,
			Age:  20,
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

func (s *server) Product(ctx context.Context, in *messages.StoreRequest) (*messages.ProductResponse, error) {

	return &messages.ProductResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Id:         1,
		Name:       "コーラ",
		Price:      150,
		Stock:      3,
		Type:       1,
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
