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
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type mechaServer struct{}

func (m *mechaServer) SignIn(ctx context.Context, in *messages.FaceAuthRequest) (*messages.AuthResponse, error) {

	user, err := query.GetUserWithFaceId(ctx, in.Id)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	token, err := query.CreateToken(ctx, user, false)
	if err != nil {
		return &messages.AuthResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.ResourceExhausted, err.Error())
	}

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		Token:      token,
	}, status.Error(codes.OK, "")
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
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	products, err := query.FindProductsByCode(ctx, in.Tag)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.NotFound, err.Error())
	}
	for _, product := range products {
		productIds = append(productIds, product.Id)
	}

	err = query.CreateBoughtProducts(ctx, productIds, id, in.Id)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.AlreadyExists, err.Error())
	}

	err = query.UpdateRfidTags(ctx, in.Tag)
	if err != nil {
		return &messages.PurchaseResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED,
		}, status.Error(codes.ResourceExhausted, err.Error())
	}

	return &messages.PurchaseResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
	}, status.Error(codes.OK, "")
}

func (m *mechaServer) SignOut(ctx context.Context, in *messages.SignOutRequest) (*messages.AuthResponse, error) {
	_ = query.DeleteToken(ctx, in.Token, false)

	return &messages.AuthResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_FAILED_AUTH,
	}, status.Error(codes.OK, "")
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
