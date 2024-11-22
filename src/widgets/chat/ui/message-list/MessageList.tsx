import { ChatMessage } from '~/widgets/chat/store/types'
import { Message } from '~/widgets/chat/ui/message/Message';
import styles from './messageList.module.scss'
import { useEffect, useRef } from 'react';

interface MessageListProps {
  messages: ChatMessage[];
}

export const MessageList = ({messages}: MessageListProps) => {
  const messagesEnd = useRef<HTMLDivElement>(null);

const scrollToBottom = () => {
  if (!messagesEnd.current) return;
  messagesEnd.current.scrollIntoView();
};

useEffect(() => scrollToBottom(), [messages])

  return (
    <div  className={styles.list}>
      { messages.map((message) => {
        return (
          <Message message={message.textMessage} senderName={message.senderContactName ?? message.senderName ?? message.sender?.slice(-5)} timestamp={message.timestamp} key={message.idMessage} />)
      }) }
      <div ref={messagesEnd} />
    </div>
  )
}