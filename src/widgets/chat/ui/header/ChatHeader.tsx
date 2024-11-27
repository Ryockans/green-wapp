import { useChatStore } from '~/widgets/chat/store/useChatStore'
import styles from './chatHeader.module.scss';
import ChevronIcon  from './assets/chevron.svg?react';
import SignOutIcon  from './assets/signout.svg?react';
import { useInstanceStore } from '~/entities/instance';
import classNames from 'classnames';

export const ChatHeader = () => {
  const store = useChatStore();
  const instanceStore = useInstanceStore();
  const backButtonClass = classNames(styles.button, styles.backButton);
  const signOutButtonClass = classNames(styles.button, styles.signOutButton);

  return (
    <div className={styles.header}>
      {store.currentChat && <button className={backButtonClass} onClick={() => store.resetChat()}>
        <ChevronIcon />
      </button>}

      <h2 className={styles.headline}>
        {store.currentChat ? store.receipentPhone : 'Chat'}
      </h2>

      <button className={signOutButtonClass} onClick={() => instanceStore.signOut()}>
        <SignOutIcon />
      </button>
    </div>
  )
}