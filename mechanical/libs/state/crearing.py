#!/usr/bin/python
# -*- coding: utf-8 -*-

import grpc
from ..config import config
from ..generated.grpc import enums_pb2
from ..generated.grpc import messages_pb2
from ..generated.grpc import mechanical_service_pb2
from ..generated.grpc import enums_pb2_grpc
from ..generated.grpc import messages_pb2_grpc
from ..generated.grpc import mechanical_service_pb2_grpc

class MainStateClearing(object):

    def __init__(self, stub):
        self.stub = stub

    def Clearing(self, user, rfids):
        store = config.GetStore()
        try:
            self.stub.Purchase(messages_pb2.PurchaseRequest(user_id=user.id, store_id=int(store['id']), tag=rfids))
        except:
            print('filed clearing')