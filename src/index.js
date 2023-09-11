import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';

import App from './App';
import Form from './Form';
import SignUp from './SignUp';
import ConditionalRender from './ConditionalRender.js';
import Gallery from './Gallery.js';

/*
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
//ReactDom.render(<Form />, document.getElementById('form'));

/*
const rootElement = document.getElementById('form');
const root = createRoot(rootElement);
root.render(<Form />);
*/
/*
const rootElement = document.getElementById('signup');
const root = createRoot(rootElement);
root.render(<SignUp />);
*/
/*
const rootElement = document.getElementById('conditionalrender');
const root = createRoot(rootElement);
root.render(<ConditionalRender />);
*/

//Initial render
const rootElement = document.getElementById('gallery');
const root = createRoot(rootElement);
root.render(<Gallery />);
