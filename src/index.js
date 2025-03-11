import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, miniApp, initData, initDataUser } from '@telegram-apps/sdk';
import { isTMA } from '@telegram-apps/bridge';
import axios from 'axios';

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

const sendData = async (initData) => {
  console.log('sended', JSON.stringify(initData), initData)
  try {
    const response = await axios.post('https://gogt1tcrfq.loclx.io/telegram/auth', JSON.stringify(initData));

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};


if (await isTMA()) {
  sendData(initData)
}

initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

