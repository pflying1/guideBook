import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from "./reportWebVitals";
import Main from "./containers/main";
import LoginPage from './containers/loginPage';
import Page404 from "./containers/page404";
import MajagGuide from "./containers/majagGuide";
import SenbaKurono from "./containers/senbaKurono";
//import Process from "dotenv";

function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/page404" element={<Page404 />} />
            <Route path="/majagGuide" element={<MajagGuide />} />
            <Route path="/senbaKurono" element={<SenbaKurono />} />
            <Route path="/senbaKurono/:chapter" element={<SenbaKurono />} />
            <Route path="/senbaKurono/:chapter/:hash" element={<SenbaKurono />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error("Root element not found");
}

reportWebVitals();