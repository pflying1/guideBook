import React from 'react';

const OAuthLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/login';
  };

  return (
    <div className='loginMainCss'>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </div>
  );
};

export default OAuthLogin;