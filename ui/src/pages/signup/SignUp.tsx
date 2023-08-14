import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CertificationResult, useAuth } from '../../hooks/useAuth';

export const SignUp: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const executeSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signUp(email, password)
      .then(() => {
        navigate({ pathname: '/confirmSignUp' });
      })
      .catch((error: CertificationResult) => {
        // 適切にエラーハンドリングして画面に表示する
        throw new Error(error.message);
      });
  };

  return (
    <form noValidate onSubmit={executeSignUp}>
      <div>
        <label htmlFor="email">
          メールアドレス:
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          パスワード:
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">アカウント登録</button>
    </form>
  );
};
