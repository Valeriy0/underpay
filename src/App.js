import React from "react";
import { RoutesFind } from "./RoutesFind";
import './style.scss';
import { useState,  useEffect } from 'react';
import axios from 'axios';
import { initData } from '@telegram-apps/sdk';


function App() {

  return (
    <RoutesFind />
  );
}

export default App;