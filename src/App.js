import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useState,  useEffect } from 'react';
import axios from 'axios';
import { initData } from '@telegram-apps/sdk';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(initData);
    if (initData?.user()) {
      const user = initData?.user();
      console.log('user enable')
      const userData = {
        id: user?.id?.toString(),
        first_name: user?.first_name,
        username: user?.username || '',
        photo_url: user?.photo_url || '',
        auth_date: initData?.auth_date()?.toString(),
        hash: initData?.hash(),
      };

      setUserData(userData);
    }

  }, [initData]);

  console.log(userData);

  // useEffect(() => {
  //   const sendData = async () => {
  //     try {
  //       const response = await axios.post('https://0b5e-171-97-245-69.ngrok-free.app/telegram/auth', JSON.stringify(initData));

  //       console.log('Response:', response.data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   if (initData) {
  //     sendData();
  //   }
  // }, [initData]);

  return (
    <RoutesFind />
  );
}

export default App;