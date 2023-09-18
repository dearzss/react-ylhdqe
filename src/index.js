import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';

import App from './App';
import Form from './Form';
import SignUp from './SignUp';
import ConditionalRender from './ConditionalRender.js';
import Gallery from './Gallery.js';
import Arrary1 from './Arrary1.js';
import Arrary2 from './Arrary2.js';
import Search from './Search.js';
import Contact from './Contact/Contact.js';

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
/*
const rootElement = document.getElementById('gallery');
const root = createRoot(rootElement);
root.render(<Gallery />);
*/
//createRoot(document.getElementById('gallery')).render(<Gallery />);
//createRoot(document.getElementById('array')).render(<Arrary1 />);
createRoot(document.getElementById('array2')).render(<Arrary2 />);
//createRoot(document.getElementById('search')).render(<Search />);
//createRoot(document.getElementById('contact')).render(<Contact />);
