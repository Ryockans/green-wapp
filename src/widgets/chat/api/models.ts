export interface SendMessageRequest {
  chatId: string;
  message: string;
}

export interface SendMessageResponseData {
  idMessage: string;
}

export interface NotificationData {
  receiptId: number;
  body: Body;
}

export interface Body {
  typeWebhook: string;
  instanceData: InstanceData;
  timestamp: number;
  idMessage: string;
  senderData: SenderData;
  messageData: MessageData;
}

export interface InstanceData {
  idInstance: number;
  wid: string;
  typeInstance: string;
}

export interface SenderData {
  chatId: string;
  sender: string;
  senderName: string;
  senderContactName: string;
}

export interface MessageData {
  typeMessage: string;
  textMessageData: TextMessageData;
}

export interface TextMessageData {
  textMessage: string;
}


export interface DeleteNotificationData {
  result: boolean;
}

