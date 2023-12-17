import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './pages/chat/Chat';
import { SignIn } from './pages/signIn/SignIn';
import { SignUp } from './pages/signUp/SignUp'
import { ConfirmSignUp } from './pages/confirmSignup/ConfirmSignUp'
import { Top } from './pages/top/Top';
import { Register } from './pages/register/Register';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="confirmSignUp" element={<ConfirmSignUp />} />
      <Route path="top" element={<Top />} />
      <Route path="chat" element={<Chat/>} />
      <Route path="register" element={<Register/>}/>
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
);
