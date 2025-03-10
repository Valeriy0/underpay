import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, miniApp, retrieveLaunchParams } from '@telegram-apps/sdk';
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
  const { initDataRaw } = retrieveLaunchParams();
  console.log(1234, initDataRaw);
}

initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

