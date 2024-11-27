import { FormEvent } from 'react';
import { useChatStore } from '~/widgets/chat/store/useChatStore';
import ArrowIcon from './assets/arrow.svg?react';
import styles from './messageForm.module.scss'
import { UiInput } from '~/shared/ui/input';

export const MessageForm = () => {
  const store = useChatStore();

  const handleSubmitMessage = (event: FormEvent) => {
    event.preventDefault();
    store.sendMessage();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitMessage}>
      <UiInput id="message" className={styles.input} placeholder='Enter your message' value={store.message} onChange={(event) => store.writeMessage(event.target.value)} />

      <button className={styles.sendButton}>
        <ArrowIcon className={styles.icon} />
      </button>
    </form>
  )
}