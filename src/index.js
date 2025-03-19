import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initWeb, useInitData, SDKProvider, isTMA } from "@tma.js/sdk-react";

if (await isTMA()) {
  initWeb();

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <SDKProvider>
        <App />
      </SDKProvider>
    </React.StrictMode>
  );
} 
else {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
}