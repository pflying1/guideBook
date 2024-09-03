import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store';
import reportWebVitals from "./reportWebVitals";
import Main from "./containers/main";
import LoginPage from './containers/loginPage';
import Page404 from "./containers/page404";
import MajagGuide from "./containers/majagGuide";
import SenbaKurono from "./containers/senbaKurono";
import PrivateRoute from './containers/privateRoute';
import Dashboard from './containers/dashboard';
import { checkAuthentication } from './stores/auth/authUsersSlice';
import useAuthCheck from './hooks/useAuthCheck';
//import Process from "dotenv";

function Index() {
  const dispatch = useDispatch();
  const { isAuthenticated, status } = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    dispatch(checkAuthentication());
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
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/" element={isAuthenticated ? <Main /> : <Navigate to="/login" />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/majagGuide" element={isAuthenticated ? <MajagGuide /> : <Navigate to="/login" />} />
          <Route path="/senbaKurono" element={isAuthenticated ? <SenbaKurono /> : <Navigate to="/login" />} />
          <Route path="/senbaKurono/:chapter" element={isAuthenticated ? <SenbaKurono /> : <Navigate to="/login" />} />
          <Route path="/senbaKurono/:chapter/:hash" element={isAuthenticated ? <SenbaKurono /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/page404" />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(    
    <Provider store={store}>
      <Index />
    </Provider>
  );
} else {
  console.error("Root element not found");
}

reportWebVitals();