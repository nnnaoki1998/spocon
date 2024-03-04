import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify, Storage } from 'aws-amplify';
import { Router } from './Router';
import { AuthProvider } from './AuthProvider';
import awsExports from './aws-exports';

Amplify.configure({ ...awsExports });

// S3へのアクセスを「読み取りは全ユーザ許容、書き込みは認証ユーザのみ許容」の設定にする
Storage.configure({
  level: 'protected',
});

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element.')

const root = createRoot(container)

root.render(
    <AuthProvider>
      <Router />
    </AuthProvider>
);
