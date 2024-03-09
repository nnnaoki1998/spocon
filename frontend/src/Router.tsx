import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/signin/SignIn';
import { SignUp } from './pages/signup/SignUp'
import { ConfirmSignUp } from './pages/confirmSignup/ConfirmSignUp'
import { Top } from './components/5_pages/Top';
import { Profile } from './components/5_pages/Profile';
import { Chat } from './components/5_pages/Chat';
import { Test } from './components/5_pages/Test';
import { ImageSample } from './components/5_pages/ImageSample';
import { TopBackup } from './pages/top/Top';
import { ChatBackup } from './pages/chat/Chat';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirmSignUp" element={<ConfirmSignUp />} />
      <Route path="/top" element={<Top />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:teamId" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/test/:id" element={<Test />} />
      <Route path="/top-backup" element={<TopBackup />} />
      <Route path="/chat-backup" element={<ChatBackup />} />
      <Route path="/imageSample" element={<ImageSample />} />
      <Route path="/*" element={<p>Page Not Found</p>} />
    </Routes>
  </BrowserRouter>
);

