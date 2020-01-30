# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import messages_pb2 as messages__pb2


class MechanicalServiceStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.SignIn = channel.unary_unary(
        '/services.MechanicalService/SignIn',
        request_serializer=messages__pb2.AuthWithQrCodeRequest.SerializeToString,
        response_deserializer=messages__pb2.AuthWithQrCodeResponse.FromString,
        )
    self.Purchase = channel.unary_unary(
        '/services.MechanicalService/Purchase',
        request_serializer=messages__pb2.PurchaseRequest.SerializeToString,
        response_deserializer=messages__pb2.PurchaseResponse.FromString,
        )


class MechanicalServiceServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def SignIn(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def Purchase(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_MechanicalServiceServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'SignIn': grpc.unary_unary_rpc_method_handler(
          servicer.SignIn,
          request_deserializer=messages__pb2.AuthWithQrCodeRequest.FromString,
          response_serializer=messages__pb2.AuthWithQrCodeResponse.SerializeToString,
      ),
      'Purchase': grpc.unary_unary_rpc_method_handler(
          servicer.Purchase,
          request_deserializer=messages__pb2.PurchaseRequest.FromString,
          response_serializer=messages__pb2.PurchaseResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'services.MechanicalService', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
