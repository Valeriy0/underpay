import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, miniApp, initData } from '@telegram-apps/sdk';
import { isTMA } from '@telegram-apps/bridge';

const initializeTelegramSDK = async () => {
  try {
    await init();


    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};

if (await isTMA()) {
  console.log(1234, initData);
}

initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

