import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useInitData, isTMA } from "@tma.js/sdk-react";

export function TelegramApp() {
  const initData = useInitData();
  const isTelegramApp = isTMA();

  React.useEffect(() => {
    if (isTelegramApp && initData && initData.init) {
      initData.init();
    }
  }, [initData, isTelegramApp]);

  return <RoutesFind />;
}

function App() {
  return <RoutesFind />;
}

export default App;