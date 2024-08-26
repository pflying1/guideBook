import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store';
import { oAuthLogin } from '../stores/auth/index';

const OAuthCallback: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // AppDispatch 타입 사용
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    if (token) {
      dispatch(oAuthLogin(token));
    }
  }, [dispatch, navigate]);

  return <div>Logging in...</div>;
};

export default OAuthCallback;