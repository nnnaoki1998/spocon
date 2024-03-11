import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth/useAuth';

interface Props {
  children: React.ReactNode;
}

// ログイン後に表示する画面に使用する。
export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? <div>{children}</div> : <Navigate to="/" />;
};
