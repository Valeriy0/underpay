import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Link } from "react-router-dom";
import { useRequest } from "../../helpers/hooks/useRequest";
import { TelegramRepository } from "../../connectors/repositories/telegram";
// import { initData } from '@telegram-apps/sdk';
import axios from "axios";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

export const Login = () => {
    const { initDataRaw, initData } = retrieveLaunchParams();
    // const { data, call, isLoading } = useRequest(TelegramRepository.getTelegramCode);

    // useEffect(() => {
    //     if (initData) {
    //       call([JSON.stringify(initData.user())]);
    //     }
    //   }, [initData]);

    console.log(initData, initDataRaw);

      useEffect(() => {
        const sendData = async () => {
          try {
            const response = await axios.post('https://gogt1tcrfq.loclx.io/telegram/auth', JSON.stringify(initData).tgWebAppData?.user);
    
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
        <BaseLayout className='justify-center px-4 py-9'>
            <img className="max-w-[30.2rem] w-full mb-9" src="/images/login/preview.webp" alt="" />
            <div className="flex flex-col items-center justify-center space-y-3 mb-[4.4rem]">
                <span className="text-center text-white text-[3.2rem] leading-[120%] font-medium">Добро пожаловать</span>
                <span className="font-manrope text-center text-white-500 text-[1.4rem] leading-[140%]">Наш сервис предлагает простой и безопасный способ пополнить баланс в различных онлайн-играх и на игровых платформах.</span>
            </div>
            <Link to='/main' className="flex items-center justify-center bg-[#C6FE22] w-full px-9 py-6 rounded-[10rem]">
                <span className="text-mainBg text-[1.6rem] font-medium">Начать</span>
            </Link>
        </BaseLayout>
    )
}