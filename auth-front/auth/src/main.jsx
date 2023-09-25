// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');

// Check if ReactDOM.createRoot is available (React 18+)
if (ReactDOM.createRoot) {
  const rootContainer = ReactDOM.createRoot(root);
  rootContainer.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
