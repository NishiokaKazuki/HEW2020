// Code generated by protoc-gen-go. DO NOT EDIT.
// source: mechanical_service.proto

package services // import "server/generated/services"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import messages "server/generated/messages"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MechanicalServiceClient is the client API for MechanicalService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MechanicalServiceClient interface {
	SignIn(ctx context.Context, in *messages.AuthWithQrCodeRequest, opts ...grpc.CallOption) (*messages.AuthWithQrCodeResponse, error)
	Purchase(ctx context.Context, in *messages.PurchaseRequest, opts ...grpc.CallOption) (*messages.PurchaseResponse, error)
}

type mechanicalServiceClient struct {
	cc *grpc.ClientConn
}

func NewMechanicalServiceClient(cc *grpc.ClientConn) MechanicalServiceClient {
	return &mechanicalServiceClient{cc}
}

func (c *mechanicalServiceClient) SignIn(ctx context.Context, in *messages.AuthWithQrCodeRequest, opts ...grpc.CallOption) (*messages.AuthWithQrCodeResponse, error) {
	out := new(messages.AuthWithQrCodeResponse)
	err := c.cc.Invoke(ctx, "/services.MechanicalService/SignIn", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mechanicalServiceClient) Purchase(ctx context.Context, in *messages.PurchaseRequest, opts ...grpc.CallOption) (*messages.PurchaseResponse, error) {
	out := new(messages.PurchaseResponse)
	err := c.cc.Invoke(ctx, "/services.MechanicalService/Purchase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MechanicalServiceServer is the server API for MechanicalService service.
type MechanicalServiceServer interface {
	SignIn(context.Context, *messages.AuthWithQrCodeRequest) (*messages.AuthWithQrCodeResponse, error)
	Purchase(context.Context, *messages.PurchaseRequest) (*messages.PurchaseResponse, error)
}

func RegisterMechanicalServiceServer(s *grpc.Server, srv MechanicalServiceServer) {
	s.RegisterService(&_MechanicalService_serviceDesc, srv)
}

func _MechanicalService_SignIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(messages.AuthWithQrCodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MechanicalServiceServer).SignIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.MechanicalService/SignIn",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MechanicalServiceServer).SignIn(ctx, req.(*messages.AuthWithQrCodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MechanicalService_Purchase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(messages.PurchaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MechanicalServiceServer).Purchase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.MechanicalService/Purchase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MechanicalServiceServer).Purchase(ctx, req.(*messages.PurchaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _MechanicalService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.MechanicalService",
	HandlerType: (*MechanicalServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SignIn",
			Handler:    _MechanicalService_SignIn_Handler,
		},
		{
			MethodName: "Purchase",
			Handler:    _MechanicalService_Purchase_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "mechanical_service.proto",
}

func init() {
	proto.RegisterFile("mechanical_service.proto", fileDescriptor_mechanical_service_19b95e0fc270c307)
}

var fileDescriptor_mechanical_service_19b95e0fc270c307 = []byte{
	// 178 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xc8, 0x4d, 0x4d, 0xce,
	0x48, 0xcc, 0xcb, 0x4c, 0x4e, 0xcc, 0x89, 0x2f, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x80, 0x72, 0x8b, 0xa5, 0xf8, 0x72, 0x53, 0x8b, 0x8b, 0x13,
	0xd3, 0x53, 0x8b, 0x21, 0x32, 0x46, 0xcb, 0x19, 0xb9, 0x04, 0x7d, 0xe1, 0xda, 0x82, 0x21, 0xca,
	0x84, 0x7c, 0xb9, 0xd8, 0x82, 0x33, 0xd3, 0xf3, 0x3c, 0xf3, 0x84, 0xe4, 0xf5, 0xe0, 0x1a, 0x1c,
	0x4b, 0x4b, 0x32, 0xc2, 0x33, 0x4b, 0x32, 0x02, 0x8b, 0x9c, 0xf3, 0x53, 0x52, 0x83, 0x52, 0x0b,
	0x4b, 0x53, 0x8b, 0x4b, 0xa4, 0x14, 0x70, 0x2b, 0x28, 0x2e, 0xc8, 0xcf, 0x2b, 0x4e, 0x55, 0x62,
	0x10, 0x72, 0xe6, 0xe2, 0x08, 0x28, 0x2d, 0x4a, 0xce, 0x48, 0x2c, 0x4e, 0x15, 0x92, 0x44, 0xa8,
	0x87, 0x89, 0xc1, 0x8c, 0x92, 0xc2, 0x26, 0x05, 0x33, 0xc4, 0x49, 0x3a, 0x4a, 0x12, 0xe4, 0x8b,
	0xd4, 0x22, 0xfd, 0xf4, 0xd4, 0xbc, 0xd4, 0xa2, 0xc4, 0x92, 0xd4, 0x14, 0x7d, 0x98, 0xb7, 0x92,
	0xd8, 0xc0, 0xbe, 0x31, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x6e, 0x41, 0xad, 0x78, 0x03, 0x01,
	0x00, 0x00,
}
