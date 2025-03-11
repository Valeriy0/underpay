import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { retrieveLaunchParams } from '@tma.js/sdk';
import { useEffect } from 'react';
import axios from 'axios';
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { isTMA } from '@telegram-apps/bridge';


function App() {

  const launchParams = useLaunchParams();

console.log(123, launchParams);

  const initData = retrieveLaunchParams();

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
      sendData();
    }
  }, [initData]);

  return (
    <RoutesFind />
  );
}

export default App;