import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { oAuthLogin } from '../stores/auth/authUsersThunks'; // Correct import path

const OAuthCallback: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      console.log('OAuthCallback - Token:', token); // 로그 추가
      dispatch(oAuthLogin(token)).then(() => {
        console.log('oAuthLogin dispatched');
        if (isAuthenticated) {
          navigate('/');  // 로그인 후 메인 페이지로 리디렉션
        } else {
          console.warn('Not authenticated, redirecting to login');
          navigate('/login');
        }
      });
    }
  }, [dispatch, navigate, isAuthenticated]);

  return <div>Logging in...</div>;
};

export default OAuthCallback;
