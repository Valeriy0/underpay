import React from "react";

export const Reflink = () => {
    return (
        <div className="flex items-center justify-between w-full p-[1.2rem] bg-onBg rounded-[3.2rem]">
            <div className="flex items-center justify-start space-x-[1.2rem]">
                <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                    <img className="h-[2.9rem]" src="/images/invite/reflinkIcon.webp" alt="" />
                </div>
                
                <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                    <span className="text-white text-[1.6rem] font-medium">Реферальная ссылка</span>
                    <span className="text-white-500 text-[1.6rem]">Invite.underpay.net</span>
                </div>
            </div>
            <img className="w-[2.4rem] opacity-50" src="/icons/copy.svg" alt="" />
        </div>
    )
}