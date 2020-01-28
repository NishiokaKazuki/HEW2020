#!/usr/bin/python
# -*- coding: utf-8 -*-

import grpc
import sys
import utils
from ..generated.grpc import enums_pb2
from ..generated.grpc import messages_pb2
from ..generated.grpc import mechanical_service_pb2
from ..generated.grpc import enums_pb2_grpc
from ..generated.grpc import messages_pb2_grpc
from ..generated.grpc import mechanical_service_pb2_grpc
from .. import connect

class MainStateAuth(object):

    def __init__(self,stub):
        self.stub = stub

    def Auth(self, id):
        res = self.stub.SignIn(messages_pb2.FaceAuthRequest(id = id))
        print(res)
        # 認証失敗
        if res.status != True:
            utils.OutStatusCode(res.statuscode)
            return "", False
        return res.token, True