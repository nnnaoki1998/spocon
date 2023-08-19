import React from 'react';
import { useConfirmSignUp } from '../../hooks/confirmSignUp/useComfirmSignUp';
import './ComfirmSignUp.css';

/** 確認コード入力画面コンポーネント */
export const ConfirmSignUp: React.FC = () => {
  const {
    verificationCode,
    setVerificationCode,
    errorMessage,
    executeConfirmSignUp,
  } = useConfirmSignUp();

  return (
    <div>
      <h1>確認コード入力画面</h1>
      <div className="errorMessage">{errorMessage}</div>
      <form onSubmit={executeConfirmSignUp}>
        <div>
          <label htmlFor="verificationCode">
            確認コード：
            <input
              id="verificationCode"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};
