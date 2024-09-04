import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store';
import reportWebVitals from './reportWebVitals';
import Main from './containers/main';
import LoginPage from './containers/loginPage';
import Page404 from './containers/page404';
import MajagGuide from './containers/majagGuide';
import SenbaKurono from './containers/senbaKurono';
import Dashboard from './containers/dashboard';
import PrivateRoute from './containers/privateRoute'; // Import PrivateRoute
import { checkAuthentication } from './stores/auth/authUsersThunks';

function Index() {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    dispatch(checkAuthentication() as any);
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route 
            path="/"
            element={<Main />}
          />
          <Route path="/page404" element={<Page404 />} />
          <Route 
            path="/majagGuide"
            element={<PrivateRoute element={<MajagGuide />} />}
          />
          <Route 
            path="/senbaKurono"
            element={<PrivateRoute element={<SenbaKurono />} />}
          />
          <Route 
            path="/senbaKurono/:chapter"
            element={<PrivateRoute element={<SenbaKurono />} />}
          />
          <Route 
            path="/senbaKurono/:chapter/:hash"
            element={<PrivateRoute element={<SenbaKurono />} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);

reportWebVitals();
