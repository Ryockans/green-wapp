import { AnyRecord, Nullable } from '~/shared/types';

export interface UrlConfig {
  apiUrl:string;
  idInstance: string;
  apiTokenInstance: string;
}

export interface ApiConfig<T extends Nullable<AnyRecord> = null> {
  method: 'GET' | 'POST' | 'DELETE';
  data: T; // for POST queries
}

export enum ServerResponseStatus {
  Ok = 'ok',
  Error = 'error'
}

export interface ServerResponseOk<T> {
  status: ServerResponseStatus.Ok,
  data: T,
}

export interface ServerResponseError {
  status: ServerResponseStatus.Error,
  data?: Error,
}