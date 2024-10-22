import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Reflink } from "../../features/Invite/Reflink";
import { FrensList } from "../../features/Invite/FrensList";

export const Invite = () => {
    return (
        <BaseLayout className="px-[1.6rem] pt-[3.2rem] space-y-[2.4rem]">
           <div className="flex flex-col items-center justify-center text-center space-y-[0.4rem]">
            <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white">Пригласи друга</span>
            <span className="text-[1.4rem] leading-[140%] text-white-500 max-w-[85%]">Делись ссылкой с друзьями и получай бонусы за друзей</span>
           </div>
           <Reflink />
           <FrensList />
           <button className="bg-[#C6FE22] w-full rounded-[3.2rem] py-[2.4rem] px-[3.6rem]">
            <span className="text-[#101010] text-[1.6rem] font-medium">Поделиться</span>
           </button>
        </BaseLayout>
    )
}