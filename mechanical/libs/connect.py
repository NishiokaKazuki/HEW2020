#!/usr/bin/python
# -*- coding: utf-8 -*-

import grpc
import sys

from generated.grpc import enums_pb2
from generated.grpc import messages_pb2
from generated.grpc import mechanical_service_pb2
from generated.grpc import enums_pb2_grpc
from generated.grpc import messages_pb2_grpc
from generated.grpc import mechanical_service_pb2_grpc

# serverとの接続の確立
class GrpcServer(object):

    def __init__(self, url):
        channel = grpc.insecure_channel(url)
        self.stub = mechanical_service_pb2_grpc.MechanicalServiceStub(channel)
        print('Call class:GrpcServer')

    def GetServeCon(self):
        return self.stub
