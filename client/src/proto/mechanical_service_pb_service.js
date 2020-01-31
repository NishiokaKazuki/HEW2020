// package: services
// file: mechanical_service.proto
/* eslint-disable */

var mechanical_service_pb = require("./mechanical_service_pb");
var messages_pb = require("./messages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MechanicalService = (function () {
  function MechanicalService() {}
  MechanicalService.serviceName = "services.MechanicalService";
  return MechanicalService;
}());

MechanicalService.SignIn = {
  methodName: "SignIn",
  service: MechanicalService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.AuthWithQrCodeRequest,
  responseType: messages_pb.AuthWithQrCodeResponse
};

MechanicalService.Purchase = {
  methodName: "Purchase",
  service: MechanicalService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.PurchaseRequest,
  responseType: messages_pb.PurchaseResponse
};

exports.MechanicalService = MechanicalService;

function MechanicalServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MechanicalServiceClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MechanicalService.SignIn, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MechanicalServiceClient.prototype.purchase = function purchase(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MechanicalService.Purchase, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.MechanicalServiceClient = MechanicalServiceClient;

