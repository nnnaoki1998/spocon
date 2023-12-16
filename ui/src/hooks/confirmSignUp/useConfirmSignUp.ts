import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

/** 確認コード画面で使用するカスタムフック */
export const useConfirmSignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * 確認コード認証時のエラーハンドリング
   * エラー種別に応じて、適切なメッセージを設定する
   */
  const handleConfirmSignUpError = (error: Error) => {
    switch (error.name) {
      case 'NotAuthorizedException':
        setErrorMessage('ユーザーが承認されていません。');
        break;
      case 'CodeMismatchException':
        setErrorMessage('確認コードが正しくありません。');
        break;
      case 'ExpiredCodeException':
        setErrorMessage('確認コードの有効期限が切れています。');
        break;
      default:
        setErrorMessage('エラーが発生しました。入力内容を確認してください。');
        break;
    }
  };

  /**
   * 確認コード再送時のエラーハンドリング
   * エラー種別に応じて、適切なメッセージを設定する
   */
  const handleResendConfirmationCodeError = (error: Error) => {
    switch (error.name) {
      case 'NotAuthorizedException':
        setErrorMessage('ユーザーが承認されていません。');
        break;
      case 'CodeDeliveryFailureException':
        setErrorMessage(
          '確認コードの配信に失敗しました。再度送信してください。'
        );
        break;
      default:
        setErrorMessage(
          'エラーが発生しました。しばらくしてからもう一度お試しください。'
        );
        break;
    }
  };

  /** 確認コード認証処理を呼び出す */
  const executeConfirmSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .confirmSignUp(verificationCode)
      .then(() => {
        navigate({ pathname: '/' });
      })
      .catch((error: Error) => {
        handleConfirmSignUpError(error);
      });
  };

  /** 確認コード再送処理を呼び出す */
  const executeResendConfirmationCode = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    auth.resendConfirmationCode().catch((error: Error) => {
      handleResendConfirmationCodeError(error);
    });
  };

  return {
    verificationCode,
    setVerificationCode,
    errorMessage,
    executeConfirmSignUp,
    executeResendConfirmationCode,
  };
};
