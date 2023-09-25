// src/Done.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Done() {
  const navigate = useNavigate();
  const isTokenValid = () => {
    const token = localStorage.getItem('Token');
    // Replace this condition with your token validation logic.
    return token !== null && token.trim() !== ''; // Check if the token exists and is not empty.
  };

  useEffect(() => {
    const role = window.localStorage.getItem("role");
    const destination = role === "true" ? '/dashboard' : '/profile';
    navigate(destination);
  }, [isTokenValid, navigate]);
}

export default Done;
