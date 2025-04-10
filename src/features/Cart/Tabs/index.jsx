import React from "react";

export const Tabs = ({ statuses, currentStatus, setCurrentStatus }) => {
    return (
        <div className="w-full py-[1.6rem] px-[0.8rem] flex items-center justify-start space-x-[0.4rem] overflow-x-auto overflow-y-hidden invisible-scrollbar">
            {statuses?.map((item, itemList) => {
                const isChoosed = item.type === currentStatus.type;
                return (
                    <button onClick={() => setCurrentStatus(item)} className={`flex-shrink-0 whitespace-nowrap h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] ${isChoosed ? 'bg-white text-[#101010]' : 'bg-onBg text-white'}`} key={itemList}>
                        <span className="text-[1.6rem]">{item.name}</span>
                    </button>
                )
            })}
        </div>
    )
}