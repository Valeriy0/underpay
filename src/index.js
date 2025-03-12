import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, miniApp, initData, initDataRaw } from '@telegram-apps/sdk';


const initializeTelegramSDK = async () => {
  try {
    await init();


    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log(initData, initDataRaw());
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




