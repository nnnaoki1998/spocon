import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './pages/chat/Chat';
import { SignIn } from './pages/signin/SignIn';
import { SignUp } from './pages/signup/SignUp'
import { ConfirmSignUp } from './pages/confirmSignup/ConfirmSignUp'
import { Top } from './pages/top/Top';
import { Top3 } from './components/5_pages/Top3';
import { Chat2 } from './components/5_pages/Chat';
import { Profile } from './components/5_pages/Profile';
import { Test } from './components/5_pages/Test';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirmSignUp" element={<ConfirmSignUp />} />
      <Route path="/top" element={<Top />} />
      <Route path="/top3" element={<Top3 />} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/chat2" element={<Chat2 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:teamId" element={<Profile />} />
      <Route path="/test/:id" element={<Test />} />
      <Route path="/*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
);

