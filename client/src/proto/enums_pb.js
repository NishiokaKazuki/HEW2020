// source: enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.enums.ProductTypes', null, global);
goog.exportSymbol('proto.enums.SexTypes', null, global);
goog.exportSymbol('proto.enums.StatusCodes', null, global);
goog.exportSymbol('proto.enums.StoreSearchCriteria', null, global);
/**
 * @enum {number}
 */
proto.enums.StatusCodes = {
  FAILED: 0,
  SUCCESS: 1,
  FAILED_AUTH: 2
};

/**
 * @enum {number}
 */
proto.enums.SexTypes = {
  SEX_ALL: 0,
  SEX_MALE: 1,
  SEX_FEMALE: 2
};

/**
 * @enum {number}
 */
proto.enums.ProductTypes = {
  PRODUCT_ALL: 0,
  PRODUCT_DRINK: 1,
  PRODUCT_FOOD: 2,
  PRODUCT_OTHER: 3
};

/**
 * @enum {number}
 */
proto.enums.StoreSearchCriteria = {
  STORES_ALL: 0,
  STORES_ADDRESS: 1,
  STORES_COMPANY: 2,
  STORES_NEAR: 3
};

goog.object.extend(exports, proto.enums);
