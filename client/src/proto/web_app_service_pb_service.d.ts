// package: services
// file: web_app_service.proto

import * as web_app_service_pb from "./web_app_service_pb";
import * as messages_pb from "./messages_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WebAppServiceAuth = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.AuthRequest;
  readonly responseType: typeof messages_pb.AuthResponse;
};

type WebAppServiceSignIn = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.SignInRequest;
  readonly responseType: typeof messages_pb.AuthResponse;
};

type WebAppServiceSignUp = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.SignUpRequest;
  readonly responseType: typeof messages_pb.AuthResponse;
};

type WebAppServiceSignOut = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.SignOutRequest;
  readonly responseType: typeof messages_pb.AuthResponse;
};

type WebAppServiceUser = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.UserRequest;
  readonly responseType: typeof messages_pb.UserResponse;
};

type WebAppServiceStores = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.StoresRequest;
  readonly responseType: typeof messages_pb.StoresResponse;
};

type WebAppServiceStore = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.StoreRequest;
  readonly responseType: typeof messages_pb.StoreResponse;
};

type WebAppServiceProduct = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.ProductRequest;
  readonly responseType: typeof messages_pb.ProductResponse;
};

type WebAppServiceClearingHistory = {
  readonly methodName: string;
  readonly service: typeof WebAppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.ClearingHistoryRequest;
  readonly responseType: typeof messages_pb.ClearingHistoryResponse;
};

export class WebAppService {
  static readonly serviceName: string;
  static readonly Auth: WebAppServiceAuth;
  static readonly SignIn: WebAppServiceSignIn;
  static readonly SignUp: WebAppServiceSignUp;
  static readonly SignOut: WebAppServiceSignOut;
  static readonly User: WebAppServiceUser;
  static readonly Stores: WebAppServiceStores;
  static readonly Store: WebAppServiceStore;
  static readonly Product: WebAppServiceProduct;
  static readonly ClearingHistory: WebAppServiceClearingHistory;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WebAppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  auth(
    requestMessage: messages_pb.AuthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  auth(
    requestMessage: messages_pb.AuthRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: messages_pb.SignInRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: messages_pb.SignInRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: messages_pb.SignUpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signUp(
    requestMessage: messages_pb.SignUpRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signOut(
    requestMessage: messages_pb.SignOutRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  signOut(
    requestMessage: messages_pb.SignOutRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthResponse|null) => void
  ): UnaryResponse;
  user(
    requestMessage: messages_pb.UserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.UserResponse|null) => void
  ): UnaryResponse;
  user(
    requestMessage: messages_pb.UserRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.UserResponse|null) => void
  ): UnaryResponse;
  stores(
    requestMessage: messages_pb.StoresRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.StoresResponse|null) => void
  ): UnaryResponse;
  stores(
    requestMessage: messages_pb.StoresRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.StoresResponse|null) => void
  ): UnaryResponse;
  store(
    requestMessage: messages_pb.StoreRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.StoreResponse|null) => void
  ): UnaryResponse;
  store(
    requestMessage: messages_pb.StoreRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.StoreResponse|null) => void
  ): UnaryResponse;
  product(
    requestMessage: messages_pb.ProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.ProductResponse|null) => void
  ): UnaryResponse;
  product(
    requestMessage: messages_pb.ProductRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.ProductResponse|null) => void
  ): UnaryResponse;
  clearingHistory(
    requestMessage: messages_pb.ClearingHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.ClearingHistoryResponse|null) => void
  ): UnaryResponse;
  clearingHistory(
    requestMessage: messages_pb.ClearingHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.ClearingHistoryResponse|null) => void
  ): UnaryResponse;
}

