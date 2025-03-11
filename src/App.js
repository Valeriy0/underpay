import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useState,  useEffect } from 'react';
import axios from 'axios';
import { initData } from '@telegram-apps/sdk';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Получаем данные инициализации
    const data = initData();

    if (data && data.user) {
      const user = data.user;

      // Формируем объект userData
      const userData = {
        id: user.id.toString(),
        first_name: user.first_name,
        username: user.username || '', // username может отсутствовать
        photo_url: user.photo_url || '', // photo_url может отсутствовать
        auth_date: data.auth_date.toString(), // Дата аутентификации
        hash: data.hash, // Хеш для проверки данных
      };

      // Устанавливаем данные в состояние
      setUserData(userData);
    }
  }, []);

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