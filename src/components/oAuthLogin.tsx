import React from 'react';
import { useDispatch } from 'react-redux';

const OAuthLogin: React.FC = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/login';
  };

  return (
    <div className='loginMainCss'>
      <div>Login</div>
      <br />
      <br />
      <button className="loginGoogleImageButtonCss" onClick={handleGoogleLogin}></button>
      <br />
      <div>현재 구글 로그인만 구현되어 있습니다.</div>
    </div>
  );
};

export default OAuthLogin;