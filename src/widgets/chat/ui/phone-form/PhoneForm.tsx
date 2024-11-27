import { FormEvent, useState } from 'react';
import { UiInput } from '~/shared/ui/input';
import { useChatStore } from '~/widgets/chat/store/useChatStore';
import styles from './phoneForm.module.scss';

export const PhoneForm = () => {
  const store = useChatStore();
  const [receipentPhone, setReceipentPhone] = useState('');
  const handleSubmitNumber = (event: FormEvent) => {
    event.preventDefault();
    store.setCurrentChat(receipentPhone);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitNumber}>
      <UiInput className={styles.input}  value={receipentPhone} placeholder='Enter phone number' id='receiver-id'  onChange={(event) => setReceipentPhone(event.target.value)}/>

      <button className={styles.addButton} />
    </form>
  )
}