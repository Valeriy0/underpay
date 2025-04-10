import React, { useMemo } from "react";

export const Total = ({ currentItem, currentProvider }) => {

    const totalInfo = useMemo(() => [
        {
            title: 'Сумма покупки ',
            value: Number(currentItem?.priceUsd) || 0,
        },
        {
            title: 'Комиссия',
            value: Number(currentProvider?.fixedFee) || 0,
        }
    ], [currentItem, currentProvider]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {totalInfo.map((item, itemIndex) => {
                return (
                    <div className="flex items-center justify-between w-full h-[4.5rem]" key={itemIndex}>
                        <span className="text-[1.6rem] text-white">{item?.title}</span>
                        <span className="text-[1.6rem] text-white-500">{item?.value}$</span>
                    </div>
                )
            })}
            <div className="flex items-center justify-between w-full h-[4.5rem]">
                <span className="text-[1.6rem] text-white">К оплате</span>
                <span className="text-[1.6rem] text-white-500">{totalInfo[0].value + totalInfo[1].value}$</span>
            </div>
        </div>
    )
}