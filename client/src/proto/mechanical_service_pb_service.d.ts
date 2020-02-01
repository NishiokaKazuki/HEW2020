// package: services
// file: mechanical_service.proto

import * as mechanical_service_pb from "./mechanical_service_pb";
import * as messages_pb from "./messages_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MechanicalServiceSignIn = {
  readonly methodName: string;
  readonly service: typeof MechanicalService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.AuthWithQrCodeRequest;
  readonly responseType: typeof messages_pb.AuthWithQrCodeResponse;
};

type MechanicalServicePurchase = {
  readonly methodName: string;
  readonly service: typeof MechanicalService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.PurchaseRequest;
  readonly responseType: typeof messages_pb.PurchaseResponse;
};

export class MechanicalService {
  static readonly serviceName: string;
  static readonly SignIn: MechanicalServiceSignIn;
  static readonly Purchase: MechanicalServicePurchase;
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

export class MechanicalServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signIn(
    requestMessage: messages_pb.AuthWithQrCodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthWithQrCodeResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: messages_pb.AuthWithQrCodeRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.AuthWithQrCodeResponse|null) => void
  ): UnaryResponse;
  purchase(
    requestMessage: messages_pb.PurchaseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.PurchaseResponse|null) => void
  ): UnaryResponse;
  purchase(
    requestMessage: messages_pb.PurchaseRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.PurchaseResponse|null) => void
  ): UnaryResponse;
}

