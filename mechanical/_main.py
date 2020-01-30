import grpc
import sys
from libs.generated.grpc import enums_pb2
from libs.generated.grpc import messages_pb2
from libs.generated.grpc import mechanical_service_pb2
from libs.generated.grpc import enums_pb2_grpc
from libs.generated.grpc import messages_pb2_grpc
from libs.generated.grpc import mechanical_service_pb2_grpc

def sample(stub, qrcode):
    responses = stub.SignIn(messages_pb2.FaceAuthRequest(code = qrcode))
    print('Received message {}'.format(responses))

def run():
    with grpc.insecure_channel('localhost:49201') as channel:
        stub = mechanical_service_pb2_grpc.MechanicalServiceStub(channel)
        while True:
            id = raw_input("id ->")
            sample(stub, id)

if __name__ == '__main__':
    run()