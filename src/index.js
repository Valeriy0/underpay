import React from 'react';
import ReactDOM from 'react-dom/client';
import App, { TelegramApp } from './App';
import { initWeb, SDKProvider, isTMA } from "@tma.js/sdk-react";

async function initApp() {
  const isTelegramApp = await isTMA();
  
  if (isTelegramApp) {
    initWeb();
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {isTelegramApp ? (
        <SDKProvider>
          <TelegramApp />
        </SDKProvider>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
}

initApp();