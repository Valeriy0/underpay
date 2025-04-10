import React from "react";

export const Balance = ({ balance, isLoading }) => {
    if (isLoading) {
        return (
            <div className="rounded-[3.2rem] w-full bg-onBg flex flex-col items-center justify-center space-y-[1.2rem] p-[1.2rem] mb-[1.6rem]">
                <div className="h-[3.2rem] w-[12rem] bg-white/10 rounded-full animate-pulse" />
                <div className="bg-white/10 w-full py-[1.8rem] px-[1.9rem] rounded-[100rem] animate-pulse" />
            </div>
        );
    }

    return (
        <div className="rounded-[3.2rem] w-full bg-onBg flex flex-col items-center justify-center space-y-[1.2rem] p-[1.2rem] mb-[1.6rem]">
            <span className="text-[3.2rem] leading-[120%] text-white">{balance}</span>
            <button className="bg-[#C6FE22] w-full py-[1.8rem] px-[1.9rem] flex items-center justify-center rounded-[100rem]">
                <span className="text-[1.6rem] leading-[2.2rem] font-medium text-[#101010]">Пополнить</span>
            </button>
        </div>
    )
}