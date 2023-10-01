import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './pages/chat/Chat';
import { SignIn } from './pages/signin/SignIn';
import { SignUp } from './pages/signup/SignUp'
import { Top } from './pages/top/Top';
import { Top2 } from './components/5_pages/Top2'
import { Profile } from './components/5_pages/Profile'
import { Chat2 } from './components/5_pages/Chat2'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="top" element={<Top />} />
      <Route path="chat" element={<Chat/>} />
      <Route path="top2" element={<Top2 />} />
      <Route path="profile/:teamId" element={<Profile />} />
      <Route path="chat2" element={<Chat2 />} />
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
);
