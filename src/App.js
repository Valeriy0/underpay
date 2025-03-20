import React, { useEffect } from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useInitData } from "@tma.js/sdk-react";


function App() {
  const initData = useInitData();

  useEffect(() => {
    if (initData && initData.init) {
      initData.init();
    }
  }, [initData]);

  return (
    <RoutesFind />
  );
}

export default App;