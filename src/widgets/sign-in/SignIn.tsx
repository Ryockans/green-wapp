import { useInstanceStore } from '~/entities/instance';
import { UiButton } from '~/shared/ui/button';
import { UiInput } from '~/shared/ui/input';
import styles from './signin.module.scss';
import { FormEvent } from 'react';

export const SignIn = () => {
  const store = useInstanceStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    store.signIn();
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <UiInput id="api-url" label='API URL' value={store.apiUrl} onChange={(event) => store.setApiUrl(event.target.value)}  />

        <UiInput id="id-instance" label='ID Instance' value={store.idInstance} onChange={(event) => store.setIdInstance(event.target.value)}  />

        <UiInput id="api-token" label='API Token' value={store.apiTokenInstance} onChange={(event) => store.setApiTokenInstance(event.target.value)}  />

        <UiButton type='submit' label='Enter Authenticals' disabled={!(store.apiTokenInstance && store.idInstance)}  />
      </form>
    </div>
  )
}