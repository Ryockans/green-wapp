import { create, } from 'zustand'
import { devtools } from 'zustand/middleware'
import { InstanceState, InstanceStateForm } from '~/entities/instance/store/types';

const makeBaseState = (): InstanceStateForm => ({
  isAuthenticated: false,
  idInstance: '',
  apiTokenInstance: '',
  apiUrl: ''
})

export const useInstanceStore = create<InstanceState>()(devtools((set) => ({
  ...makeBaseState(),
  setIdInstance: (idInstance: string) => set(() => ({idInstance})),
  setApiTokenInstance: (apiTokenInstance: string) => set({apiTokenInstance}),
  setApiUrl: (apiUrl: string) => set({apiUrl}),
  signIn: () => set(() => ({isAuthenticated: true})),
  signOut: () => set(makeBaseState),
})));

