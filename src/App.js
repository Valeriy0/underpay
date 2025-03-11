import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { isTMA } from '@telegram-apps/bridge';
import { initData } from '@telegram-apps/sdk';


function App() {

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post('https://0b5e-171-97-245-69.ngrok-free.app/telegram/auth', JSON.stringify(initData));

        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (initData) {
      console.log(initData);
    }
  }, [initData]);

  return (
    <RoutesFind />
  );
}

export default App;