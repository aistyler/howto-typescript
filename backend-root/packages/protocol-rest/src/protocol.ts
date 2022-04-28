/**
 * Protocol Types
 */
export interface IProtocol {
  [ProtocolName.hello]: (req: Request<HelloReq>) => Response<HelloRes>;
}

export enum ProtocolName {
  hello = 1,
};

export type Request<T> = {
  name: ProtocolName;
  data?: T;
}

export type Response<T> = {
  name: ProtocolName;
  data?: T;
  error?: ResponseError;
}

export type HelloReq = {
  message: string;
};

export type HelloRes = {
  message: string;
};

export type ResponseError = {
  name: string;
  message: string;
}
