import { StateFunction } from '~/shared/types';

export interface InstanceStateForm {
  isAuthenticated?: boolean;
  idInstance: string;
  apiTokenInstance: string;
  apiUrl: string;
}

export interface InstanceState extends InstanceStateForm {
  setIdInstance: StateFunction<[string]>;
  setApiUrl: StateFunction<[string]>;
  setApiTokenInstance: StateFunction<[string]>;
  signIn: StateFunction;
  signOut: StateFunction;
}
