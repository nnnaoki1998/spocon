import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CertificationResult, useAuth } from '../../hooks/useAuth';

export const SignIn: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const executeSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signIn(email, password)
      .then(() => {
        navigate({ pathname: '/top' });
      })
      .catch((error: CertificationResult) => {
        // 適切にエラーハンドリングして画面に表示する
        throw new Error(error.message);
      });
  };

  return (
    <div>
      <h1>ログイン画面</h1>
      <form noValidate onSubmit={executeSignIn}>
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
        <button type="submit">ログイン</button>
      </form>
      <p>
        <Link to="/signup">アカウント登録</Link>
      </p>
    </div>
  );
};
