import React from 'react';

const OAuthLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google';
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default OAuthLogin;