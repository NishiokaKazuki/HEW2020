import grpc
import sys
from generated.grpc import enums_pb2
from generated.grpc import messages_pb2
from generated.grpc import mechanical_service_pb2
from generated.grpc import enums_pb2_grpc
from generated.grpc import messages_pb2_grpc
from generated.grpc import mechanical_service_pb2_grpc

def sample(stub, fid):
    responses = stub.SignIn(messages_pb2.FaceAuthRequest(id = fid))
    print('Received message {}'.format(responses))

def run():
    with grpc.insecure_channel('localhost:49201') as channel:
        stub = mechanical_service_pb2_grpc.MechanicalServiceStub(channel)
        while True:
            id = raw_input("id ->")
            sample(stub, id)

if __name__ == '__main__':
    run()