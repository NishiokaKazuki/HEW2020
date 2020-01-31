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

func (m *mechaServer) SignIn(ctx context.Context, in *messages.AuthWithQrCodeRequest) (*messages.AuthWithQrCodeResponse, error) {

	id, err := Auth(ctx, in.Code)
	if err != nil {
		return &messages.AuthWithQrCodeResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.Unauthenticated, err.Error())
	}

	user, err := query.GetUser(ctx, id)
	if err != nil {
		return &messages.AuthWithQrCodeResponse{
			Status:     false,
			StatusCode: enums.StatusCodes_FAILED_AUTH,
		}, status.Error(codes.NotFound, err.Error())
	}

	return &messages.AuthWithQrCodeResponse{
		Status:     true,
		StatusCode: enums.StatusCodes_SUCCESS,
		User: &messages.AuthWithQrCodeResponse_AppUser{
			Id:   user.Id,
			Name: user.Name,
			Sex:  user.Sex,
			Age:  user.Age,
		},
	}, status.Error(codes.OK, "")
}

func (m *mechaServer) Purchase(ctx context.Context, in *messages.PurchaseRequest) (*messages.PurchaseResponse, error) {
	var (
		productIds []uint64
	)

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

	err = query.CreateBoughtProducts(ctx, productIds, in.UserId, in.StoreId)
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
