import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../auth/useAuth';

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
        setErrorMessage('エラーが発生しました。入力内容を確認してください。');
        break;
    }
  };

  /** サインイン処理を呼び出す */
  const executeSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signIn(email, password)
      .then(() => {
        navigate({ pathname: '/imageSample' });
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
