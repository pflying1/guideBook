import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from "./reportWebVitals";
import Main from "./containers/main";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();