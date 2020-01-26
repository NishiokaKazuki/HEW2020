package controller

import (
	"api-server/controller/query"
	"api-server/controller/utils"
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

	user, err := signin(ctx, in.UserId, in.UserPw)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	token, err := query.CreateToken(ctx, user, true)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
	}, nil
}

func (s *server) SignUp(ctx context.Context, in *messages.SignUpRequest) (*messages.AuthResponse, error) {

	user, err := query.CreateUser(ctx, table.AppUsers{
		Name:   in.Name,
		Sex:    in.Sex,
		Age:    in.Age,
		SignId: in.UserId,
		SignPw: utils.HashPw(in.UserPw),
	})
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			Token:      "",
		}, err
	}

	token, err := query.CreateToken(ctx, user, true)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			Token:      "",
		}, err
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
	}, nil
}

func (s *server) SignOut(ctx context.Context, in *messages.SignOutRequest) (*messages.AuthResponse, error) {

	_ = query.DeleteToken(ctx, in.Token, true)

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
	}, nil
}

func (s *server) User(ctx context.Context, in *messages.UserRequest) (*messages.UserResponse, error) {
	var (
		user table.AppUsers
	)

	id, err := Auth(ctx, in.Token, true)
	if err != nil {
		return &messages.UserResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			User:       &messages.UserResponse_AppUser{},
		}, err
	}

	user, err = query.GetUser(ctx, id)
	if err != nil {
		return &messages.UserResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
			User:       &messages.UserResponse_AppUser{},
		}, err
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
		products []*messages.StoreResponse_Product
	)

	_, err := Auth(ctx, in.Token, true)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	stores, err := query.GetStore(ctx, in.Id)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	ps, err := query.FindProducts(ctx, in.Id)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}
	for _, product := range ps {
		products = append(products, &messages.StoreResponse_Product{
			Id:    product.Id,
			Name:  product.Name,
			Price: product.Price,
			Stock: product.Stock,
		})
	}

	return &messages.StoreResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Store: &messages.StoreResponse_Store{
			Id: stores.Stores.Id,
			// Image: stores.Stores.Image,
			Address: stores.Stores.Address,
		},
		Company: &messages.StoreResponse_Company{
			Id:   stores.Companies.Id,
			Name: stores.Name,
		},
		Products: products,
	}, nil
}

func (s *server) Product(ctx context.Context, in *messages.ProductRequest) (*messages.ProductResponse, error) {
	var (
		product table.Products
	)
	_, err := Auth(ctx, in.Token, true)
	if err != nil {
		return &messages.ProductResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	product, err = query.GetProduct(ctx, in.Id)
	if err != nil {
		return &messages.ProductResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
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
		history  []*messages.ClearingHistoryResponse_Clearing
		hProduct *messages.ClearingHistoryResponse_Clearing_Product
		date     string
		storeId  uint64
	)

	id, err := Auth(ctx, in.Token, true)
	if err != nil {
		return &messages.ClearingHistoryResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	products, err := query.FindBoughtProduts(ctx, id)
	if err != nil {
		return &messages.ClearingHistoryResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	for _, product := range products {

		hProduct = &messages.ClearingHistoryResponse_Clearing_Product{
			Id:    product.Products.Id,
			Name:  product.Products.Name,
			Price: product.Products.Price,
		}

		// 購入店舗もしくは購入日が異なる場合
		if date != product.BoughtProducts.CreatedAt.Format("2006/01/02") ||
			storeId != product.Stores.Id {

			date = product.BoughtProducts.CreatedAt.Format("2006/01/02")
			storeId = product.Stores.Id
			history = append(history, &messages.ClearingHistoryResponse_Clearing{
				Date: date,
				Store: &messages.ClearingHistoryResponse_Clearing_Store{
					Id:      storeId,
					Address: product.Stores.Address,
				},
				Company: &messages.ClearingHistoryResponse_Clearing_Company{
					Id:   product.Companies.Id,
					Name: product.Companies.Name,
				},
			})
		}
		history[len(history)-1].Products = append(history[len(history)-1].Products, hProduct)
	}

	return &messages.ClearingHistoryResponse{
		Status:          true,
		StatusCode:      enums.StatusCodes_SUCCESS,
		ClearingHistory: history,
	}, nil
}

func StartingServer(port string) {
	listenPort, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err)
	}

	s := grpc.NewServer()
	pb.RegisterWebAppServiceServer(s, &server{})

	log.Println("starting server", port)
	err = s.Serve(listenPort)
	if err != nil {
		log.Fatal("failed open", port)
	}
}