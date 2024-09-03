import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../stores/auth/authUsersSlice';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;