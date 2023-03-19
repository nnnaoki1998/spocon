import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element.')

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
);
