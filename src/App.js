import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { retrieveLaunchParams } from '@tma.js/sdk';

function App() {

  const initData = retrieveLaunchParams();

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post('https://gogt1tcrfq.loclx.io/api/telegram/auth', JSON.stringify(initData));

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
