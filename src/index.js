import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';

import App from './App';
import Form from './Form';

/*
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
ReactDom.render(<Form />, document.getElementById('form'));
