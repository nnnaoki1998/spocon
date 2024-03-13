import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

export const useSignOut = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  /** サインアウト処理を呼び出す */
  const executeSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate({ pathname: '/' });
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };

  return {
    executeSignOut,
  };
};
