import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/signin/SignIn';
import { SignUp } from './pages/signup/SignUp'
import { Top } from './pages/top/Top';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="top" element={<Top />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
)

export default Router;
