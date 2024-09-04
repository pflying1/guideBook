import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store';
import { oAuthLogin } from '../stores/auth/authUsersThunks';

const OAuthCallback: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');

    if (token) {
      dispatch(oAuthLogin(token))
        .then(() => {
          navigate(`/?token=${token}`); // 로그인 후 메인 페이지로 리다이렉션
        })
        .catch((error) => {
          console.error('로그인 오류:', error);
          navigate('/login'); // 오류가 발생하면 로그인 페이지로 리다이렉션
        });
    } else {
      navigate('/login'); // 토큰이 없으면 로그인 페이지로 리다이렉션
    }
  }, [dispatch, navigate]);

  return <div>Logging in...</div>;
};

export default OAuthCallback;
