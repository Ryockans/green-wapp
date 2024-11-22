import { DeleteNotificationData } from './models';
import { makeApiUrl, UrlConfig, useAppFetch } from '~/shared/api';
import { NotificationData, SendMessageRequest, SendMessageResponseData } from '~/widgets/chat/api/models';

export class ChatApi {
  static sendMessage(urlConfig: UrlConfig, data: SendMessageRequest) {
    const url = makeApiUrl('sendMessage')(urlConfig);

    return useAppFetch<SendMessageResponseData>(url, { method: 'POST', data })
  }

  static receiveNotification(urlConfig: UrlConfig, receiveTimeout?: number) {
    const timeout = receiveTimeout && receiveTimeout >= 0 && receiveTimeout <= 60 ? receiveTimeout : 5;
    const url = `${makeApiUrl('receiveNotification')(urlConfig)}?receiveTimeout=${timeout}`;

    return useAppFetch<NotificationData>(url)
  }

  static deleteNotification(urlConfig: UrlConfig, receiptId: number) {
    const url = `${makeApiUrl('deleteNotification')(urlConfig)}/${receiptId}`;

    return useAppFetch<DeleteNotificationData>(url, { method: 'DELETE', data: null })
  }
}