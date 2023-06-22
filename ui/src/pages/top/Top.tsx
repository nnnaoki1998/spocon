import React from 'react';
import { Link } from 'react-router-dom';
import { PrivateRoute } from '../../components/PrivateRoute';
import { useAuth } from '../../hooks/useAuth';

export const Top: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div />;
  }

  return (
    <PrivateRoute>
      <div>email: {auth.attributes.email}</div>
      <div>
        <Link to="/chat">チャット画面に遷移</Link>
      </div>
      <div>
        <Link to="/">
          <button type="button" onClick={() => auth.signOut}>
            ログアウト
          </button>
        </Link>
      </div>
    </PrivateRoute>
  );
};
