import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PrivateRoute } from '../../components/PrivateRoute';
import { backendUrl } from '../../config';
import { useAuth } from '../../hooks/auth/useAuth';

export const Top: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div />;
  }

  useEffect(() => {
    axios
      .get(`${backendUrl}/team`)
      .then((res) => {
        console.log(res.data); // eslint-disable-line no-console
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }, []);

  return (
    <PrivateRoute>
      <div>email: {auth.email}</div>
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
