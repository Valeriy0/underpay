import React from "react";

const totalInfo = [
    {
        title: 'Сумма покупки ',
        value: '450',
    },
    {
        title: 'Комиссия',
        value: '450',
    }
];

export const Total = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            {totalInfo.map((item, itemIndex) => {
                return (
                    <div className="flex items-center justify-between w-full h-[4.5rem]" key={itemIndex}>
                        <span className="text-[1.6rem] text-white">{item?.title}</span>
                        <span className="text-[1.6rem] text-white-500">{item?.value}₽</span>
                    </div>
                )
            })}
            <div className="flex items-center justify-between w-full h-[4.5rem]">
                <span className="text-[1.6rem] text-white">К оплате</span>
                <span className="text-[1.6rem] text-white-500">{totalInfo[0].value + totalInfo[1].value}₽</span>
            </div>
        </div>
    )
}