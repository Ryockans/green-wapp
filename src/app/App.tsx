import { SignIn } from '~/widgets/sign-in';
import './styles/_index.scss';
import { useInstanceStore } from '~/entities/instance';
import { Chat } from '~/widgets/chat';

export default function App() {
const instanceStore = useInstanceStore();

  return (
    <>
      {instanceStore.isAuthenticated ? <Chat /> : <SignIn />}
    </>
  )
}
