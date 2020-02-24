// package: messages
// file: messages.proto

import * as jspb from "google-protobuf";
import * as enums_pb from "./enums_pb";

export class AuthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    token: string,
  }
}

export class AuthResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): AuthResponse.AppUser | undefined;
  setUser(value?: AuthResponse.AppUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    token: string,
    user?: AuthResponse.AppUser.AsObject,
  }

  export class AppUser extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getSex(): enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap];
    setSex(value: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap]): void;

    getAge(): number;
    setAge(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppUser.AsObject;
    static toObject(includeInstance: boolean, msg: AppUser): AppUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppUser;
    static deserializeBinaryFromReader(message: AppUser, reader: jspb.BinaryReader): AppUser;
  }

  export namespace AppUser {
    export type AsObject = {
      id: number,
      name: string,
      sex: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap],
      age: number,
    }
  }
}

export class SignInRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getUserPw(): string;
  setUserPw(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    userId: string,
    userPw: string,
  }
}

export class SignUpRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSex(): enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap];
  setSex(value: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap]): void;

  getAge(): number;
  setAge(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  getUserPw(): string;
  setUserPw(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignUpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignUpRequest;
  static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
  export type AsObject = {
    name: string,
    sex: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap],
    age: number,
    userId: string,
    userPw: string,
  }
}

export class SignOutRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignOutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignOutRequest): SignOutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignOutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignOutRequest;
  static deserializeBinaryFromReader(message: SignOutRequest, reader: jspb.BinaryReader): SignOutRequest;
}

export namespace SignOutRequest {
  export type AsObject = {
    token: string,
  }
}

export class StoresRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getCriteria(): enums_pb.StoreSearchCriteriaMap[keyof enums_pb.StoreSearchCriteriaMap];
  setCriteria(value: enums_pb.StoreSearchCriteriaMap[keyof enums_pb.StoreSearchCriteriaMap]): void;

  getSerch(): string;
  setSerch(value: string): void;

  getCurrentPage(): number;
  setCurrentPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoresRequest): StoresRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoresRequest;
  static deserializeBinaryFromReader(message: StoresRequest, reader: jspb.BinaryReader): StoresRequest;
}

export namespace StoresRequest {
  export type AsObject = {
    token: string,
    criteria: enums_pb.StoreSearchCriteriaMap[keyof enums_pb.StoreSearchCriteriaMap],
    serch: string,
    currentPage: number,
  }
}

export class StoresResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  clearStoresList(): void;
  getStoresList(): Array<StoresResponse.Store>;
  setStoresList(value: Array<StoresResponse.Store>): void;
  addStores(value?: StoresResponse.Store, index?: number): StoresResponse.Store;

  clearCompaniesList(): void;
  getCompaniesList(): Array<StoresResponse.Company>;
  setCompaniesList(value: Array<StoresResponse.Company>): void;
  addCompanies(value?: StoresResponse.Company, index?: number): StoresResponse.Company;

  getPages(): number;
  setPages(value: number): void;

  getCurrentPage(): number;
  setCurrentPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoresResponse): StoresResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoresResponse;
  static deserializeBinaryFromReader(message: StoresResponse, reader: jspb.BinaryReader): StoresResponse;
}

export namespace StoresResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    storesList: Array<StoresResponse.Store.AsObject>,
    companiesList: Array<StoresResponse.Company.AsObject>,
    pages: number,
    currentPage: number,
  }

  export class Store extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getAddress(): string;
    setAddress(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Store.AsObject;
    static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Store;
    static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
  }

  export namespace Store {
    export type AsObject = {
      id: number,
      address: string,
    }
  }

  export class Company extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Company.AsObject;
    static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Company;
    static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
  }

  export namespace Company {
    export type AsObject = {
      id: number,
      name: string,
    }
  }
}

export class StoreRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoreRequest): StoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreRequest;
  static deserializeBinaryFromReader(message: StoreRequest, reader: jspb.BinaryReader): StoreRequest;
}

export namespace StoreRequest {
  export type AsObject = {
    token: string,
    id: number,
  }
}

export class StoreResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  hasStore(): boolean;
  clearStore(): void;
  getStore(): StoreResponse.Store | undefined;
  setStore(value?: StoreResponse.Store): void;

  hasCompany(): boolean;
  clearCompany(): void;
  getCompany(): StoreResponse.Company | undefined;
  setCompany(value?: StoreResponse.Company): void;

  clearProductsList(): void;
  getProductsList(): Array<StoreResponse.Product>;
  setProductsList(value: Array<StoreResponse.Product>): void;
  addProducts(value?: StoreResponse.Product, index?: number): StoreResponse.Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoreResponse): StoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreResponse;
  static deserializeBinaryFromReader(message: StoreResponse, reader: jspb.BinaryReader): StoreResponse;
}

export namespace StoreResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    store?: StoreResponse.Store.AsObject,
    company?: StoreResponse.Company.AsObject,
    productsList: Array<StoreResponse.Product.AsObject>,
  }

  export class Store extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getImage(): string;
    setImage(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Store.AsObject;
    static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Store;
    static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
  }

  export namespace Store {
    export type AsObject = {
      id: number,
      image: string,
      address: string,
    }
  }

  export class Company extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Company.AsObject;
    static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Company;
    static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
  }

  export namespace Company {
    export type AsObject = {
      id: number,
      name: string,
    }
  }

  export class Product extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;

    getStock(): number;
    setStock(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
  }

  export namespace Product {
    export type AsObject = {
      id: number,
      name: string,
      price: number,
      stock: number,
    }
  }
}

export class ProductRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRequest;
  static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
  export type AsObject = {
    token: string,
    id: number,
  }
}

export class ProductResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getStock(): number;
  setStock(value: number): void;

  getType(): number;
  setType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductResponse;
  static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    id: number,
    name: string,
    price: number,
    stock: number,
    type: number,
  }
}

export class UserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    token: string,
  }
}

export class UserResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserResponse.AppUser | undefined;
  setUser(value?: UserResponse.AppUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    user?: UserResponse.AppUser.AsObject,
  }

  export class AppUser extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getSex(): enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap];
    setSex(value: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap]): void;

    getAge(): number;
    setAge(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppUser.AsObject;
    static toObject(includeInstance: boolean, msg: AppUser): AppUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppUser;
    static deserializeBinaryFromReader(message: AppUser, reader: jspb.BinaryReader): AppUser;
  }

  export namespace AppUser {
    export type AsObject = {
      id: number,
      name: string,
      sex: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap],
      age: number,
    }
  }
}

export class ClearingHistoryRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearingHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearingHistoryRequest): ClearingHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearingHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearingHistoryRequest;
  static deserializeBinaryFromReader(message: ClearingHistoryRequest, reader: jspb.BinaryReader): ClearingHistoryRequest;
}

export namespace ClearingHistoryRequest {
  export type AsObject = {
    token: string,
  }
}

export class ClearingHistoryResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  clearClearinghistoryList(): void;
  getClearinghistoryList(): Array<ClearingHistoryResponse.Clearing>;
  setClearinghistoryList(value: Array<ClearingHistoryResponse.Clearing>): void;
  addClearinghistory(value?: ClearingHistoryResponse.Clearing, index?: number): ClearingHistoryResponse.Clearing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearingHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearingHistoryResponse): ClearingHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearingHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearingHistoryResponse;
  static deserializeBinaryFromReader(message: ClearingHistoryResponse, reader: jspb.BinaryReader): ClearingHistoryResponse;
}

export namespace ClearingHistoryResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    clearinghistoryList: Array<ClearingHistoryResponse.Clearing.AsObject>,
  }

  export class Clearing extends jspb.Message {
    getDate(): string;
    setDate(value: string): void;

    hasStore(): boolean;
    clearStore(): void;
    getStore(): ClearingHistoryResponse.Clearing.Store | undefined;
    setStore(value?: ClearingHistoryResponse.Clearing.Store): void;

    hasCompany(): boolean;
    clearCompany(): void;
    getCompany(): ClearingHistoryResponse.Clearing.Company | undefined;
    setCompany(value?: ClearingHistoryResponse.Clearing.Company): void;

    clearProductsList(): void;
    getProductsList(): Array<ClearingHistoryResponse.Clearing.Product>;
    setProductsList(value: Array<ClearingHistoryResponse.Clearing.Product>): void;
    addProducts(value?: ClearingHistoryResponse.Clearing.Product, index?: number): ClearingHistoryResponse.Clearing.Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Clearing.AsObject;
    static toObject(includeInstance: boolean, msg: Clearing): Clearing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Clearing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Clearing;
    static deserializeBinaryFromReader(message: Clearing, reader: jspb.BinaryReader): Clearing;
  }

  export namespace Clearing {
    export type AsObject = {
      date: string,
      store?: ClearingHistoryResponse.Clearing.Store.AsObject,
      company?: ClearingHistoryResponse.Clearing.Company.AsObject,
      productsList: Array<ClearingHistoryResponse.Clearing.Product.AsObject>,
    }

    export class Store extends jspb.Message {
      getId(): number;
      setId(value: number): void;

      getImage(): string;
      setImage(value: string): void;

      getAddress(): string;
      setAddress(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Store.AsObject;
      static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Store;
      static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
    }

    export namespace Store {
      export type AsObject = {
        id: number,
        image: string,
        address: string,
      }
    }

    export class Company extends jspb.Message {
      getId(): number;
      setId(value: number): void;

      getName(): string;
      setName(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Company.AsObject;
      static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Company;
      static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
    }

    export namespace Company {
      export type AsObject = {
        id: number,
        name: string,
      }
    }

    export class Product extends jspb.Message {
      getId(): number;
      setId(value: number): void;

      getName(): string;
      setName(value: string): void;

      getPrice(): number;
      setPrice(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Product.AsObject;
      static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Product;
      static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
    }

    export namespace Product {
      export type AsObject = {
        id: number,
        name: string,
        price: number,
      }
    }
  }
}

export class AuthWithQrCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthWithQrCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthWithQrCodeRequest): AuthWithQrCodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthWithQrCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthWithQrCodeRequest;
  static deserializeBinaryFromReader(message: AuthWithQrCodeRequest, reader: jspb.BinaryReader): AuthWithQrCodeRequest;
}

export namespace AuthWithQrCodeRequest {
  export type AsObject = {
    code: string,
  }
}

export class AuthWithQrCodeResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): AuthWithQrCodeResponse.AppUser | undefined;
  setUser(value?: AuthWithQrCodeResponse.AppUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthWithQrCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthWithQrCodeResponse): AuthWithQrCodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthWithQrCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthWithQrCodeResponse;
  static deserializeBinaryFromReader(message: AuthWithQrCodeResponse, reader: jspb.BinaryReader): AuthWithQrCodeResponse;
}

export namespace AuthWithQrCodeResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    user?: AuthWithQrCodeResponse.AppUser.AsObject,
  }

  export class AppUser extends jspb.Message {
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getSex(): enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap];
    setSex(value: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap]): void;

    getAge(): number;
    setAge(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppUser.AsObject;
    static toObject(includeInstance: boolean, msg: AppUser): AppUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppUser;
    static deserializeBinaryFromReader(message: AppUser, reader: jspb.BinaryReader): AppUser;
  }

  export namespace AppUser {
    export type AsObject = {
      id: number,
      name: string,
      sex: enums_pb.SexTypesMap[keyof enums_pb.SexTypesMap],
      age: number,
    }
  }
}

export class PurchaseRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getStoreId(): number;
  setStoreId(value: number): void;

  clearTagList(): void;
  getTagList(): Array<string>;
  setTagList(value: Array<string>): void;
  addTag(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseRequest): PurchaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseRequest;
  static deserializeBinaryFromReader(message: PurchaseRequest, reader: jspb.BinaryReader): PurchaseRequest;
}

export namespace PurchaseRequest {
  export type AsObject = {
    userId: number,
    storeId: number,
    tagList: Array<string>,
  }
}

export class PurchaseResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseResponse): PurchaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseResponse;
  static deserializeBinaryFromReader(message: PurchaseResponse, reader: jspb.BinaryReader): PurchaseResponse;
}

export namespace PurchaseResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
  }
}

export class StorePlaceRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getKeyword(): string;
  setKeyword(value: string): void;

  getLat(): number;
  setLat(value: number): void;

  getLng(): number;
  setLng(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorePlaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StorePlaceRequest): StorePlaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorePlaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorePlaceRequest;
  static deserializeBinaryFromReader(message: StorePlaceRequest, reader: jspb.BinaryReader): StorePlaceRequest;
}

export namespace StorePlaceRequest {
  export type AsObject = {
    token: string,
    keyword: string,
    lat: number,
    lng: number,
  }
}

export class StorePlaceResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getStatusCode(): enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap];
  setStatusCode(value: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap]): void;

  getStore(): string;
  setStore(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorePlaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StorePlaceResponse): StorePlaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorePlaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorePlaceResponse;
  static deserializeBinaryFromReader(message: StorePlaceResponse, reader: jspb.BinaryReader): StorePlaceResponse;
}

export namespace StorePlaceResponse {
  export type AsObject = {
    status: boolean,
    statusCode: enums_pb.StatusCodesMap[keyof enums_pb.StatusCodesMap],
    store: string,
  }
}

