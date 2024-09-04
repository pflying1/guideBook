import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { checkAuthentication } from '../stores/auth/authUsersThunks'; // Import from correct file

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, status } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(checkAuthentication());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;