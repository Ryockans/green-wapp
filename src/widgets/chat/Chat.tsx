import { useChatStore } from '~/widgets/chat/store/useChatStore'
import styles from './chat.module.scss';
import { PhoneForm } from '~/widgets/chat/ui/phone-form';
import { MessageForm } from '~/widgets/chat/ui/message-form';
import { MessageList } from '~/widgets/chat/ui/message-list';
import { useEffect } from 'react';
import { ChatHeader } from '~/widgets/chat/ui/header';

export const Chat = () => {
  const store = useChatStore();

  useEffect(() => {
    if (!store.currentChat) return;

    const checkNotification = async () => {
      await store.getNotification();
      await store.clearNotification();
    }

    checkNotification();
    const intervalId = setInterval(checkNotification, 3000);

    return () => clearInterval(intervalId);
  }, [store.currentChat]);

  return (
    <div className={styles.container}>
      <ChatHeader />

      <div className={styles.messageScreen}>
        <MessageList messages={store.messages} />

      </div>

      <div className={styles.formWrapper}>
        {store.currentChat ? (
          <MessageForm />
        ) : (
          <PhoneForm />
        ) }
      </div>
    </div>
  )
}