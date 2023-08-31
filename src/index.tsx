import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

// components
import { App, AppProviders } from './App';

const helmetContext = {};
const rootElement = document.getElementById('root') as Element;
const project = (
  <React.StrictMode>
    <HelmetProvider context={ helmetContext }>
      <AppProviders>
        <App />
      </AppProviders>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(
    rootElement,
    project
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    project
  );
}


