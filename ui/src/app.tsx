import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { useAuth } from './hooks/useAuth';
import { SignIn } from './pages/SignIn';

const App: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div />;
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const TopPage = () => (
    <div>
      <p>トップページ</p>
      <p>{auth.isAuthenticated ? 'ログイン済' : '未ログイン'}</p>
      <p>
        <Link to="/signin">ログイン</Link>
      </p>
    </div>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const PrivateDashboard = () => (
    <PrivateRoute>
      <div>userId: {auth.username} </div>
      <Link to="/">
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => auth.signOut()}>
          ログアウト
        </button>
      </Link>
    </PrivateRoute>

  );

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<PrivateDashboard />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
