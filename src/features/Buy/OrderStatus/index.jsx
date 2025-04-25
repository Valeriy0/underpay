import React from "react";

export const OrderStatus = ({ orderData }) => {

    const statuses = {
        1: 'Ожидание оплаты',
        2: 'Оплачено'
    }
    return (
        <div className="flex flex-col items-center justify-between w-full space-y-[2.4rem] p-[1.2rem] bg-onBg rounded-[3.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem] w-full">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                            <img className="w-[2.5rem]" src='/images/buy/time.webp' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">{statuses[orderData?.status]}</span>
                            <span className="text-white-500 text-[1.6rem]">Статус</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-start space-x-[1.2rem] w-full">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                            <img className="w-[2.4rem]" src='/images/buy/money.webp' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">{orderData?.amountUsd}$</span>
                            <span className="text-white-500 text-[1.6rem]">Стоимость</span>
                        </div>
                    </div>
                </div>
    )
}