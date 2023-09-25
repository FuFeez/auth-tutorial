// main.js
import React from 'react';
import ReactDOM from 'react-dom';
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
} else {
  // Fallback for older React versions
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}
