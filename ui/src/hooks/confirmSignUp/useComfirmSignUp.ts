import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

/** 確認コード画面で使用するカスタムフック */
export const useConfirmSignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /** エラー種別に応じて、適切なメッセージを設定する */
  const handleComfirmSignUpError = (error: Error) => {
    switch (error.name) {
      case 'CodeMismatchException':
        setErrorMessage('確認コードが正しくありません。');
        break;
      // TODO: 確認コードの再送信の導線を作ったほうがよさそう
      case 'ExpiredCodeException':
        setErrorMessage('確認コードの有効期限が切れています。');
        break;
      default:
        setErrorMessage(
          'エラーが発生しました。しばらくしてからもう一度お試しください。'
        );
        break;
    }
  };

  /** 確認コードを送信処理を呼び出す */
  const executeConfirmSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .confirmSignUp(verificationCode)
      .then(() => {
        navigate({ pathname: '/' });
      })
      .catch((error: Error) => {
        handleComfirmSignUpError(error);
      });
  };

  return {
    verificationCode,
    setVerificationCode,
    errorMessage,
    executeConfirmSignUp,
  };
};
