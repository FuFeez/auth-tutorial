import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('Token');
    localStorage.removeItem('role')
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard. Here, you can access admin-related features.</p>
      {/* Add your dashboard content here */}
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
