import React from 'react';
import './signUp.css';
import { useSignUp } from '../../hooks/signUp/useSingUp';
import '../../base.css';

export const SignUp: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    executeSignUp,
  } = useSignUp();

  return (
    <div>
      <h1>アカウント登録画面</h1>
      <div className="errorMessage">{errorMessage}</div>
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
    </div>
  );
};
