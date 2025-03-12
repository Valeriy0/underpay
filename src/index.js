import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initWeb, useInitData, SDKProvider } from "@tma.js/sdk-react";

initWeb();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SDKProvider>
      <App />
    </SDKProvider>
  </React.StrictMode>
);




