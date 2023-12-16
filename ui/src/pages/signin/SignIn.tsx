import React from 'react';
import { Link } from 'react-router-dom';
import { useSignIn } from '../../hooks/signIn/useSignIn';
import '../../base.css';

export const SignIn: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    executeSignIn,
  } = useSignIn();

  return (
    <div>
      <h1>ログイン画面</h1>
      <div className="errorMessage">{errorMessage}</div>
      <form onSubmit={executeSignIn}>
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
