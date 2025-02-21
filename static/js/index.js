import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';

/* Create root element */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Render Layout */
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
