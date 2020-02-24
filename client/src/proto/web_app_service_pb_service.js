/* eslint-disable */
// package: services
// file: web_app_service.proto

var web_app_service_pb = require("./web_app_service_pb");
var messages_pb = require("./messages_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WebAppService = (function () {
  function WebAppService() {}
  WebAppService.serviceName = "services.WebAppService";
  return WebAppService;
}());

WebAppService.Auth = {
  methodName: "Auth",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.AuthRequest,
  responseType: messages_pb.AuthResponse
};

WebAppService.SignIn = {
  methodName: "SignIn",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.SignInRequest,
  responseType: messages_pb.AuthResponse
};

WebAppService.SignUp = {
  methodName: "SignUp",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.SignUpRequest,
  responseType: messages_pb.AuthResponse
};

WebAppService.SignOut = {
  methodName: "SignOut",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.SignOutRequest,
  responseType: messages_pb.AuthResponse
};

WebAppService.User = {
  methodName: "User",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.UserRequest,
  responseType: messages_pb.UserResponse
};

WebAppService.Stores = {
  methodName: "Stores",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.StoresRequest,
  responseType: messages_pb.StoresResponse
};

WebAppService.Store = {
  methodName: "Store",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.StoreRequest,
  responseType: messages_pb.StoreResponse
};

WebAppService.Product = {
  methodName: "Product",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.ProductRequest,
  responseType: messages_pb.ProductResponse
};

WebAppService.ClearingHistory = {
  methodName: "ClearingHistory",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.ClearingHistoryRequest,
  responseType: messages_pb.ClearingHistoryResponse
};

WebAppService.StorePlace = {
  methodName: "StorePlace",
  service: WebAppService,
  requestStream: false,
  responseStream: false,
  requestType: messages_pb.StorePlaceRequest,
  responseType: messages_pb.StorePlaceResponse
};

exports.WebAppService = WebAppService;

function WebAppServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WebAppServiceClient.prototype.auth = function auth(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.Auth, {
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

WebAppServiceClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.SignIn, {
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

WebAppServiceClient.prototype.signUp = function signUp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.SignUp, {
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

WebAppServiceClient.prototype.signOut = function signOut(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.SignOut, {
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

WebAppServiceClient.prototype.user = function user(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.User, {
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

WebAppServiceClient.prototype.stores = function stores(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.Stores, {
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

WebAppServiceClient.prototype.store = function store(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.Store, {
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

WebAppServiceClient.prototype.product = function product(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.Product, {
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

WebAppServiceClient.prototype.clearingHistory = function clearingHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.ClearingHistory, {
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

WebAppServiceClient.prototype.storePlace = function storePlace(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebAppService.StorePlace, {
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

exports.WebAppServiceClient = WebAppServiceClient;

