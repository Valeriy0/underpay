import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, miniApp } from '@telegram-apps/sdk';


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


initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




