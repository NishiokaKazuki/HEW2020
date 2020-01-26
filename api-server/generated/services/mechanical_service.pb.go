// Code generated by protoc-gen-go. DO NOT EDIT.
// source: mechanical_service.proto

package services // import "api-server/generated/services"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import messages "api-server/generated/messages"

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
	SignIn(ctx context.Context, in *messages.FaceAuthRequest, opts ...grpc.CallOption) (*messages.AuthResponse, error)
	Purchase(ctx context.Context, in *messages.PurchaseRequest, opts ...grpc.CallOption) (*messages.PurchaseResponse, error)
	SignOut(ctx context.Context, in *messages.SignOutRequest, opts ...grpc.CallOption) (*messages.AuthResponse, error)
}

type mechanicalServiceClient struct {
	cc *grpc.ClientConn
}

func NewMechanicalServiceClient(cc *grpc.ClientConn) MechanicalServiceClient {
	return &mechanicalServiceClient{cc}
}

func (c *mechanicalServiceClient) SignIn(ctx context.Context, in *messages.FaceAuthRequest, opts ...grpc.CallOption) (*messages.AuthResponse, error) {
	out := new(messages.AuthResponse)
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

func (c *mechanicalServiceClient) SignOut(ctx context.Context, in *messages.SignOutRequest, opts ...grpc.CallOption) (*messages.AuthResponse, error) {
	out := new(messages.AuthResponse)
	err := c.cc.Invoke(ctx, "/services.MechanicalService/SignOut", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MechanicalServiceServer is the server API for MechanicalService service.
type MechanicalServiceServer interface {
	SignIn(context.Context, *messages.FaceAuthRequest) (*messages.AuthResponse, error)
	Purchase(context.Context, *messages.PurchaseRequest) (*messages.PurchaseResponse, error)
	SignOut(context.Context, *messages.SignOutRequest) (*messages.AuthResponse, error)
}

func RegisterMechanicalServiceServer(s *grpc.Server, srv MechanicalServiceServer) {
	s.RegisterService(&_MechanicalService_serviceDesc, srv)
}

func _MechanicalService_SignIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(messages.FaceAuthRequest)
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
		return srv.(MechanicalServiceServer).SignIn(ctx, req.(*messages.FaceAuthRequest))
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

func _MechanicalService_SignOut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(messages.SignOutRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MechanicalServiceServer).SignOut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.MechanicalService/SignOut",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MechanicalServiceServer).SignOut(ctx, req.(*messages.SignOutRequest))
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
		{
			MethodName: "SignOut",
			Handler:    _MechanicalService_SignOut_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "mechanical_service.proto",
}

func init() {
	proto.RegisterFile("mechanical_service.proto", fileDescriptor_mechanical_service_a61126a0a668526c)
}

var fileDescriptor_mechanical_service_a61126a0a668526c = []byte{
	// 193 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xc8, 0x4d, 0x4d, 0xce,
	0x48, 0xcc, 0xcb, 0x4c, 0x4e, 0xcc, 0x89, 0x2f, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0xd5, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x80, 0x72, 0x8b, 0xa5, 0xf8, 0x72, 0x53, 0x8b, 0x8b, 0x13,
	0xd3, 0x53, 0x8b, 0x21, 0x32, 0x46, 0xd7, 0x18, 0xb9, 0x04, 0x7d, 0xe1, 0xda, 0x82, 0x21, 0xca,
	0x84, 0x6c, 0xb9, 0xd8, 0x82, 0x33, 0xd3, 0xf3, 0x3c, 0xf3, 0x84, 0x24, 0xf5, 0xe0, 0x1a, 0xdc,
	0x12, 0x93, 0x53, 0x1d, 0x4b, 0x4b, 0x32, 0x82, 0x52, 0x0b, 0x4b, 0x53, 0x8b, 0x4b, 0xa4, 0xc4,
	0x10, 0x52, 0x10, 0xe1, 0xe2, 0x82, 0xfc, 0xbc, 0xe2, 0x54, 0x25, 0x06, 0x21, 0x67, 0x2e, 0x8e,
	0x80, 0xd2, 0xa2, 0xe4, 0x8c, 0xc4, 0xe2, 0x54, 0x64, 0x03, 0x60, 0x62, 0x30, 0x03, 0xa4, 0xb0,
	0x49, 0xc1, 0x0d, 0xb1, 0xe5, 0x62, 0x07, 0xb9, 0xc1, 0xbf, 0xb4, 0x44, 0x48, 0x02, 0xa1, 0x10,
	0x2a, 0x44, 0xd0, 0x0d, 0x4e, 0xf2, 0x51, 0xb2, 0x89, 0x05, 0x99, 0xba, 0x20, 0x8f, 0xa7, 0x16,
	0xe9, 0xa7, 0xa7, 0xe6, 0xa5, 0x16, 0x25, 0x96, 0xa4, 0xa6, 0xe8, 0xc3, 0x42, 0x22, 0x89, 0x0d,
	0x1c, 0x00, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x33, 0xd5, 0xa5, 0x5b, 0x36, 0x01, 0x00,
	0x00,
}