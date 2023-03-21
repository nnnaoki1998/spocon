import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './App';
import { ProvideAuth } from './hooks/useAuth';

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element.')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ProvideAuth>
      <Hello />
    </ProvideAuth>
  </React.StrictMode>,
);
