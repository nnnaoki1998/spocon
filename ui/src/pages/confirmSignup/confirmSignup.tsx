import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CertificationResult, useAuth } from '../../hooks/useAuth';

export const ConfirmSignUp: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');

  const executeConfirmSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .confirmSignUp(verificationCode)
      .then(() => {
        navigate({ pathname: '/' });
      })
      .catch((error: CertificationResult) => {
        // 適切にエラーハンドリングして画面に表示する
        throw new Error(error.message);
      });
  };

  return (
    <div>
      <h1>確認コード入力画面</h1>
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
