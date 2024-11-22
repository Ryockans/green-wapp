import { create, } from 'zustand'
import { devtools } from 'zustand/middleware';
import { useInstanceStore } from '~/entities/instance';
import { isErrorResponse } from '~/shared/api';
import { ChatApi } from '~/widgets/chat/api';
import { ChatMessage, ChatState } from '~/widgets/chat/store/types';


const getConfig = () => {
  const { apiTokenInstance, idInstance, apiUrl } = useInstanceStore.getState();
  return { apiUrl, idInstance, apiTokenInstance };
}

export const useChatStore = create<ChatState>()(devtools((set, get) => {
  return {
    currentChat: '',
    receipentPhone: '',
    message: '',
    messages: [],
    receiptId: null,
    getNotification: async () => {
      const { receiptId, currentChat, messages } = get();

      if (receiptId) return false

      const response = await ChatApi.receiveNotification(getConfig(), 3);

      if (isErrorResponse(response)) return false;

      set(() => ({ receiptId: response.data && 'receiptId' in response.data ? response.data.receiptId : null }) )


      if (!response.data || response.data.body.messageData.typeMessage !== 'textMessage' || response.data.body.senderData.chatId !== response.data.body.senderData.sender) return false;

      const message: ChatMessage = {
        idMessage: response.data.body.idMessage,
        chatId: response.data.body.senderData.chatId,
        senderContactName: response.data.body.senderData.senderContactName,
        senderName: response.data.body.senderData.senderName,
        textMessage: response.data.body.messageData.textMessageData.textMessage,
        timestamp: response.data.body.timestamp
        }

        if (message.chatId && message.chatId === currentChat) {
          set(() => ({ messages: [...messages, message]}));
        }


        return true;
    },
    clearNotification: async () => {
      const { receiptId } = get();
      if (!receiptId) return false;

      const response = await ChatApi.deleteNotification(getConfig(), receiptId);

      if (isErrorResponse(response)) return false;

      set(() => ({ receiptId: null }));

      return true;
    },
    writeMessage: (message) => set({message}),
    sendMessage: async () => {
      const { message, messages, currentChat } = get();
      const chatMessage: ChatMessage = {
        timestamp: +new Date(),
        senderName: 'You',
        textMessage: message,
        idMessage: `userMessage-${+new Date()}`
      }

      set(() => ({ messages: [...messages, chatMessage], message: '', }));

      const response = await ChatApi.sendMessage(getConfig(), { chatId: currentChat, message: message });

      if (isErrorResponse(response)) {
        set(() => ({ messages: messages.filter((item) => item.idMessage !== chatMessage.idMessage) }))

        return false;
      }

      return true;
    },
    setCurrentChat: (receipentPhone: string) => set({currentChat: `${receipentPhone}@c.us`, receipentPhone}),
    resetChat: () => set({currentChat: '', receipentPhone:'', messages: []}),
  }
}));