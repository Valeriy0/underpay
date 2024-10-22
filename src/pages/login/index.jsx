import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <BaseLayout className='px-4 py-9'>
            <img className="max-w-[30.2rem] w-full mb-9" src="/images/main/preview.webp" alt="" />
            <div className="flex flex-col items-center justify-center space-y-3 mb-[4.4rem]">
                <span className="text-center text-white text-[3.2rem] leading-[120%] font-medium">Добро пожаловать</span>
                <span className="font-manrope text-center text-white-500 text-[1.4rem] leading-[140%]">Наш сервис предлагает простой и безопасный способ пополнить баланс в различных онлайн-играх и на игровых платформах.</span>
            </div>
            <Link to='/' className="bg-[#C6FE22] w-full px-9 py-6 rounded-[10rem]">
                <span className="text-mainBg text-[1.6rem] font-medium">Начать</span>
            </Link>
        </BaseLayout>
    )
}