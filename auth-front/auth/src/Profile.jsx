import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
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
      <h1>Profile</h1>
      <p>Welcome to your profile. Here, you can view and edit your user information.</p>
      {/* Add your profile content here */}
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
