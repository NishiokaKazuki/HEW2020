# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: mechanical_service.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import messages_pb2 as messages__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='mechanical_service.proto',
  package='services',
  syntax='proto3',
  serialized_options=_b('Z\035api-server/generated/services'),
  serialized_pb=_b('\n\x18mechanical_service.proto\x12\x08services\x1a\x0emessages.proto2\xd6\x01\n\x11MechanicalService\x12=\n\x06SignIn\x12\x19.messages.FaceAuthRequest\x1a\x16.messages.AuthResponse\"\x00\x12\x43\n\x08Purchase\x12\x19.messages.PurchaseRequest\x1a\x1a.messages.PurchaseResponse\"\x00\x12=\n\x07SignOut\x12\x18.messages.SignOutRequest\x1a\x16.messages.AuthResponse\"\x00\x42\x1fZ\x1d\x61pi-server/generated/servicesb\x06proto3')
  ,
  dependencies=[messages__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_MECHANICALSERVICE = _descriptor.ServiceDescriptor(
  name='MechanicalService',
  full_name='services.MechanicalService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=55,
  serialized_end=269,
  methods=[
  _descriptor.MethodDescriptor(
    name='SignIn',
    full_name='services.MechanicalService.SignIn',
    index=0,
    containing_service=None,
    input_type=messages__pb2._FACEAUTHREQUEST,
    output_type=messages__pb2._AUTHRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='Purchase',
    full_name='services.MechanicalService.Purchase',
    index=1,
    containing_service=None,
    input_type=messages__pb2._PURCHASEREQUEST,
    output_type=messages__pb2._PURCHASERESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SignOut',
    full_name='services.MechanicalService.SignOut',
    index=2,
    containing_service=None,
    input_type=messages__pb2._SIGNOUTREQUEST,
    output_type=messages__pb2._AUTHRESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_MECHANICALSERVICE)

DESCRIPTOR.services_by_name['MechanicalService'] = _MECHANICALSERVICE

# @@protoc_insertion_point(module_scope)
