import { StateFunction, Nullable, AsyncStateFunction } from '~/shared/types';

export interface ChatMessage {
  timestamp: number;
  chatId?: string;
  sender?: string;
  senderName: string;
  senderContactName?: string;
  textMessage: string;
  idMessage: string;
}

export interface ChatState {
  message: string;
  receipentPhone: string;
  currentChat: string;
  messages: ChatMessage[];
  receiptId: Nullable<number>;
  getNotification: AsyncStateFunction;
  clearNotification: AsyncStateFunction;
  writeMessage: StateFunction<[string]>;
  sendMessage: AsyncStateFunction;
  setCurrentChat: StateFunction;
  resetChat: StateFunction;
}