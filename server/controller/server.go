package controller

import (
	"context"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"net/url"
	"server/configs"
	"server/controller/query"
	"server/controller/utils"
	"server/generated/enums"
	"server/generated/messages"
	pb "server/generated/services"
	"server/model/table"
	"strconv"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const (
	confpath = "configs/config.toml"
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
		}, status.Error(codes.InvalidArgument, err.Error())
	}

	token, err := query.CreateToken(ctx, user)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.ResourceExhausted, err.Error()) // wip:ResourceExhausted
	}

	id, err := Auth(ctx, token)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			User:       &messages.AuthResponse_AppUser{},
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	user, err = query.GetUser(ctx, id)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
			User:       &messages.AuthResponse_AppUser{},
		}, status.Error(codes.NotFound, err.Error())
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
		User: &messages.AuthResponse_AppUser{
			Id:   user.Id,
			Name: user.Name,
			Sex:  user.Sex,
			Age:  user.Age,
		},
	}, status.Error(codes.OK, "")
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
		}, status.Error(codes.AlreadyExists, err.Error())
	}

	token, err := query.CreateToken(ctx, user)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.ResourceExhausted, err.Error())
	}

	id, err := Auth(ctx, token)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			User:       &messages.AuthResponse_AppUser{},
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	user, err = query.GetUser(ctx, id)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
			User:       &messages.AuthResponse_AppUser{},
		}, status.Error(codes.NotFound, err.Error())
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
		User: &messages.AuthResponse_AppUser{
			Id:   user.Id,
			Name: user.Name,
			Sex:  user.Sex,
			Age:  user.Age,
		},
	}, status.Error(codes.OK, "")
}

func (s *server) SignOut(ctx context.Context, in *messages.SignOutRequest) (*messages.AuthResponse, error) {

	_ = query.DeleteToken(ctx, in.Token, true)

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
	}, status.Error(codes.OK, "")
}

func (s *server) User(ctx context.Context, in *messages.UserRequest) (*messages.UserResponse, error) {
	var (
		user table.AppUsers
	)

	id, err := Auth(ctx, in.Token)
	if err != nil {
		return &messages.UserResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
			User:       &messages.UserResponse_AppUser{},
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	user, err = query.GetUser(ctx, id)
	if err != nil {
		return &messages.UserResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
			User:       &messages.UserResponse_AppUser{},
		}, status.Error(codes.NotFound, err.Error())
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
	}, status.Error(codes.OK, "")
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
	}, status.Error(codes.OK, "")
}

func (s *server) Store(ctx context.Context, in *messages.StoreRequest) (*messages.StoreResponse, error) {
	var (
		products []*messages.StoreResponse_Product
	)

	_, err := Auth(ctx, in.Token)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	stores, err := query.GetStore(ctx, in.Id)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.NotFound, err.Error())
	}

	ps, err := query.FindProducts(ctx, in.Id)
	if err != nil {
		return &messages.StoreResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.NotFound, err.Error())
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
	}, status.Error(codes.OK, "")
}

func (s *server) Product(ctx context.Context, in *messages.ProductRequest) (*messages.ProductResponse, error) {
	var (
		product table.Products
	)
	_, err := Auth(ctx, in.Token)
	if err != nil {
		return &messages.ProductResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	product, err = query.GetProduct(ctx, in.Id)
	if err != nil {
		return &messages.ProductResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.NotFound, err.Error())
	}

	return &messages.ProductResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Id:         product.Id,
		Name:       product.Name,
		Price:      product.Price,
		Type:       product.Type,
	}, status.Error(codes.OK, "")
}

func (s *server) StorePlace(ctx context.Context, in *messages.StorePlaceRequest) (*messages.StorePlaceResponse, error) {

	_, err := Auth(ctx, in.Token)
	if err != nil {
		return &messages.StorePlaceResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	location := strconv.FormatFloat(in.Lat, 'f', 4, 64) + "," + strconv.FormatFloat(in.Lng, 'f', 4, 64)

	config, err := configs.ReadGooglePlaceConfig(confpath)

	values := url.Values{}
	values.Add("key", config.Key)
	values.Add("location", location)
	values.Add("radius", "10000")
	values.Add("types", config.Types)
	values.Add("language", "ja")

	res, err := http.Get("//maps.googleapis.com/maps/api/place/textsearch/json" + "?" + values.Encode())
	if err != nil {
		return &messages.StorePlaceResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.Unimplemented, err.Error())
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return &messages.StorePlaceResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.Unimplemented, err.Error())
	}

	return &messages.StorePlaceResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Store:      string(body),
	}, status.Error(codes.OK, "")
}

func (s *server) ClearingHistory(ctx context.Context, in *messages.ClearingHistoryRequest) (*messages.ClearingHistoryResponse, error) {
	var (
		history  []*messages.ClearingHistoryResponse_Clearing
		hProduct *messages.ClearingHistoryResponse_Clearing_Product
		date     string
		storeId  uint64
	)

	id, err := Auth(ctx, in.Token)
	if err != nil {
		return &messages.ClearingHistoryResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	products, err := query.FindBoughtProduts(ctx, id)
	if err != nil {
		return &messages.ClearingHistoryResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.NotFound, err.Error())
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
	}, status.Error(codes.OK, "")
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
