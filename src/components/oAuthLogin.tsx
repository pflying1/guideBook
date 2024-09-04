import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { oAuthLogin } from '../stores/auth/authUsersThunks';
import { AppDispatch } from '../store';

const OAuthLogin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenFromUrl = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get('token');

      if (token) {
        try {
          // 서버에서 JWT 토큰을 처리하는 액션을 호출합니다
          await dispatch(oAuthLogin(token)).unwrap();
          
          // 메인 페이지로 리다이렉션하며 JWT 토큰을 쿼리 파라미터로 포함합니다
          navigate(`/?token=${token}`);
        } catch (error) {
          console.error('OAuth 로그인 실패:', error);
          navigate('/login'); // 로그인 페이지로 리다이렉션
        }
      } else {
        navigate('/login'); // 토큰이 없으면 로그인 페이지로 리다이렉션
      }
    };

    handleTokenFromUrl();
  }, [dispatch, navigate]);

  return (
    <div className='loginMainCss'>
      <div>로그인</div>
      <br />
      <br />
      <button 
        className="loginGoogleImageButtonCss" 
        onClick={() => window.location.href = 'http://localhost:8080/api/auth/google/login'}
      ></button>
      <br />
      <div>현재 구글 로그인만 구현되어 있습니다.</div>
    </div>
  );
};

export default OAuthLogin;
