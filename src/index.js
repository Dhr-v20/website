import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.js';
import './Header.css';
import './Footer.css';
import './Blog.css';
import './About.css';
import './Teacher.css';
import './Gallery.css';
import './Contact.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


