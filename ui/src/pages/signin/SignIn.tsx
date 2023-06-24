import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const SignIn: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const executeSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await auth.signIn(email, password);
    if (result.success) {
      navigate({ pathname: '/top' });
    } else {
      // TODO メッセージの出力方法改善
      alert(result.message);
    }
  };

  return (
    <div>
      <h1>ログイン画面</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
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
