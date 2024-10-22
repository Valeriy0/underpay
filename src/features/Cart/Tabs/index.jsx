import React, { useState } from "react";

const STATUSES = ['Ожидает оплаты', 'В доставке', 'Завершено'];

export const Tabs = () => {
    const [choosed, setChoosed] = useState(STATUSES[0]);
    return (
        <div className="w-full py-[1.6rem] px-[0.8rem] flex items-center justify-start space-x-[0.4rem] overflow-x-auto overflow-y-hidden invisible-scrollbar">
            {STATUSES?.map((item, itemList) => {
                const isChoosed = choosed === item;
                return (
                    <button onClick={() => setChoosed(item)} className={`flex-shrink-0 whitespace-nowrap h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] ${isChoosed ? 'bg-white text-[#101010]' : 'bg-onBg text-white'}`} key={itemList}>
                        <span className="text-[1.6rem]">{item}</span>
                    </button>
                )
            })}
        </div>
    )
}