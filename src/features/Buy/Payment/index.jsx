import React from "react";

export const Payment = () => {
    return (
        <div className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem] bg-onBg rounded-[3.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem]">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                            <img className="w-[1.8rem]" src='/images/buy/sbp.webp' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">СПБ</span>
                            <span className="text-white-500 text-[1.6rem]">Способ оплаты</span>
                        </div>

                        
                    </div>
                    <img className="w-[2.4rem] opacity-50" src="/icons/arrow-right.svg" alt="" />
                </div>
    )
}