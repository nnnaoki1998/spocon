import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../auth/useAuth';

/** サインアップのカスタムフック */
export const useSignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /** エラー種別に応じて、エラーメッセージを設定する */
  const handleSignUpError = (error: Error) => {
    switch (error.name) {
      case 'UsernameExistsException':
        setErrorMessage('既に登録されているメールアドレスです。');
        break;
      // メールアドレスの形式以外にこの例外が発生するケースがあるかもしれない
      // その場合Error.messageも含んだ条件分岐にする
      case 'InvalidParameterException':
        setErrorMessage('メールアドレスの形式が正しくありません。');
        break;
      case 'InvalidPasswordException':
        setErrorMessage(
          'パスワードは8文字以上で以下の形式で入力してください。\n・少なくとも1つの数字を含む\n・少なくとも1つの特殊文字を含む\n・少なくとも1つの大文字を含む\n・少なくとも1つの小文字を含む'
        );
        break;
      default:
        setErrorMessage('エラーが発生しました。入力内容を確認してください。');
        break;
    }
  };

  /** サインアップ処理を呼び出す */
  const executeSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signUp(email, password)
      .then(() => {
        navigate({ pathname: '/confirmSignUp' });
      })
      .catch((error: Error) => {
        handleSignUpError(error);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    executeSignUp,
  };
};
