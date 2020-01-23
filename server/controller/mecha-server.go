package controller

import (
	"server/controller/query"
	"server/generated/enums"
	"server/generated/messages"
	pb "server/generated/services"
	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type mechaServer struct{}

func (m *mechaServer) SignIn(ctx context.Context, in *messages.FaceAuthRequest) (*messages.AuthResponse, error) {

	user, err := query.GetUserWithFaceId(ctx, in.Id)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	token, err := query.CreateToken(ctx, user, false)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
	}, nil
}

func (m *mechaServer) Purchase(ctx context.Context, in *messages.PurchaseRequest) (*messages.PurchaseResponse, error) {
	var (
		productIds []uint64
	)

	id, err := Auth(ctx, in.Token, false)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, err
	}

	products, err := query.FindProductsByCode(ctx, in.Tag)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}
	for _, product := range products {
		productIds = append(productIds, product.Id)
	}

	err = query.CreateBoughtProducts(ctx, productIds, id, in.Id)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	err = query.UpdateRfidTags(ctx, in.Tag)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, err
	}

	return &messages.PurchaseResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
	}, err
}

func (m *mechaServer) SignOut(ctx context.Context, in *messages.SignOutRequest) (*messages.AuthResponse, error) {
	_ = query.DeleteToken(ctx, in.Token, false)

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_FAILED_AUTH,
	}, nil
}

func StartingMachaServer(port string) {
	listenPort, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err)
	}

	s := grpc.NewServer()
	pb.RegisterMechanicalServiceServer(s, &mechaServer{})

	log.Println("startingmserver", port)
	err = s.Serve(listenPort)
	if err != nil {
		log.Fatal("failed open", port)
	}
}
