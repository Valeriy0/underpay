import React, { useEffect } from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useInitData, SDKProvider } from "@tma.js/sdk-react";


function App() {
  const initData = useInitData();

  useEffect(() => {
    if (initData && initData.init) {
      initData.init();
    }
  }, [initData]);

  return (
    <SDKProvider>
      <RoutesFind />
    </SDKProvider>
  );
}

export default App;