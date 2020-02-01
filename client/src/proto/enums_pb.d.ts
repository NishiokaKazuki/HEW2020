// package: enums
// file: enums.proto

import * as jspb from "google-protobuf";

export interface StatusCodesMap {
  FAILED: 0;
  SUCCESS: 1;
  FAILED_AUTH: 2;
}

export const StatusCodes: StatusCodesMap;

export interface SexTypesMap {
  SEX_ALL: 0;
  SEX_MALE: 1;
  SEX_FEMALE: 2;
}

export const SexTypes: SexTypesMap;

export interface ProductTypesMap {
  PRODUCT_ALL: 0;
  PRODUCT_DRINK: 1;
  PRODUCT_FOOD: 2;
  PRODUCT_OTHER: 3;
}

export const ProductTypes: ProductTypesMap;

export interface StoreSearchCriteriaMap {
  STORES_ALL: 0;
  STORES_ADDRESS: 1;
  STORES_COMPANY: 2;
  STORES_NEAR: 3;
}

export const StoreSearchCriteria: StoreSearchCriteriaMap;

