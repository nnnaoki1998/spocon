import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Router } from './Router';
import { AuthProvider } from './AuthProvider';
import awsExports from './aws-exports';

Amplify.configure({ ...awsExports });

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element.')

const root = createRoot(container)

root.render(
    <AuthProvider>
      <Router />
    </AuthProvider>
);
