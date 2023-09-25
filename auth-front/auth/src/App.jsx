// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Done from './Done';
import Dashboard from './Dashboard';
import Profile from './Profile';

function App() {
  // Function to check if the token is valid
  const isTokenValid = () => {
    const token = localStorage.getItem('Token');
    // Replace this condition with your token validation logic.
    return token !== null && token.trim() !== ''; // Check if the token exists and is not empty.
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isTokenValid() ? (
              <Navigate to="/done" />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/done" element={<Done />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
