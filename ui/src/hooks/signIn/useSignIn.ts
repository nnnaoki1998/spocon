import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../useAuth';

/** サインインのカスタムフック */
export const useSignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /** エラー種別に応じて、エラーメッセージを設定する */
  const handleSignInError = (error: Error) => {
    switch (error.name) {
      case 'NotAuthorizedException':
        setErrorMessage('メールアドレスまたはパスワードが間違っています。');
        break;
      default:
        setErrorMessage(
          'エラーが発生しました。しばらくしてからもう一度お試しください。'
        );
        break;
    }
  };

  /** サインイン処理を呼び出す */
  const executeSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signIn(email, password)
      .then(() => {
        navigate({ pathname: '/top' });
      })
      .catch((error: Error) => {
        handleSignInError(error);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    executeSignIn,
  };
};
