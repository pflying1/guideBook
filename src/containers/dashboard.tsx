import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../stores/auth/authUsersSlice';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (user === null) {
    return <p>Loading...</p>; // 유저 정보가 없으면 로딩 표시
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name ? user.name : 'User'}!</p> {/* 사용자 이름을 표시 */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
