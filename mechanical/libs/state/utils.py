#!/usr/bin/python
# -*- coding: utf-8 -*-

from ..generated.grpc import enums_pb2
from ..generated.grpc import enums_pb2_grpc

def OutStatusCode(code):
    if code == enums_pb2.FAILED_AUTH:
        print('認証失敗')
    if code == enums_pb2.FAILED:
        print('異常終了')