import classNames from 'classnames';
import styles from './message.module.scss';
import dayjs from 'dayjs';

interface MessageProps {
  message: string;
  senderName: string;
  timestamp: number;
}

export const Message = (props: MessageProps) => {
  const isUserMessage = props.senderName === 'You';
  const wrapperClass = classNames(styles.wrapper, isUserMessage && '-user')
  const date = dayjs(props.timestamp).format('dd, DD MMM. YYYY, HH:mm');

  return (
    <div className={wrapperClass}>
      <div className={styles.message}>
        <p className={styles.senderName}>
          {props.senderName}
        </p>

        <p className={styles.messageText}>
          {props.message}
        </p>

        <p className={styles.date}>
          {date}
        </p>
      </div>

    </div>
  )
}