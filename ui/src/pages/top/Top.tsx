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
      <div>userId: {auth.username} </div>
      <Link to="/">
        <button type="button" onClick={() => auth.signOut()}>
          ログアウト
        </button>
      </Link>
    </PrivateRoute>
  );
};
