import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// ログイン後に表示する画面に使用する。
export const PrivateRoute: React.FC = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <div>{children}</div> : <Navigate to="/" />;
};
