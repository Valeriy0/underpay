import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { retrieveLaunchParams } from '@tma.js/sdk';
import { setCookie } from "nookies";
import { useRequest } from "../../helpers/hooks/useRequest";
import { TelegramRepository } from "../../connectors/repositories/telegram";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const initData = retrieveLaunchParams();  
  const { data, call, isLoading } = useRequest(TelegramRepository.auth)
    
  const onAuth = () => {
    if (initData) {
      call([JSON.stringify(initData)]);
    }
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      // setCookie(null, 'apiToken', data.data.jwtToken, {
      //   maxAge: 30 * 24 * 60 * 60,
      //   path: '/',
      // })
      navigate('/main');
    }
  })
  

  return (
    <BaseLayout className='justify-center px-4 py-9'>
      <img className="max-w-[30.2rem] w-full mb-9" src="/images/login/preview.webp" alt="" />
      <div className="flex flex-col items-center justify-center space-y-3 mb-[4.4rem]">
        <span className="text-center text-white text-[3.2rem] leading-[120%] font-medium">Добро пожаловать</span>
        <span className="font-manrope text-center text-white-500 text-[1.4rem] leading-[140%]">Наш сервис предлагает простой и безопасный способ пополнить баланс в различных онлайн-играх и на игровых платформах.</span>
      </div>
      <button onClick={() => onAuth()} className="flex items-center justify-center bg-[#C6FE22] w-full px-9 py-6 rounded-[10rem]">
        <span className="text-mainBg text-[1.6rem] font-medium">{isLoading ? 'Авторизация' : 'Начать'}</span>
      </button>
    </BaseLayout>
  )
}