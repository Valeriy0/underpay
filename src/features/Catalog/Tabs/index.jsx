import React, { useState } from "react";
import { TAB_MENU } from "../../../helpers/menu";
import { Search } from "./SearchComp";

export const Tabs = () => {
    const [choosed, setChoosed] = useState(TAB_MENU[0]?.title);
    const [isOpenedSearch, setIsOpenedSearch] = useState(false);
    return (
        <div className="w-full py-[1.6rem] px-[0.8rem] flex items-center justify-start space-x-[0.4rem] overflow-x-auto overflow-y-hidden invisible-scrollbar">
            <Search isOpened={isOpenedSearch} setIsOpened={setIsOpenedSearch} />
            {!isOpenedSearch && TAB_MENU?.map((item, itemList) => {
                const isChoosed = choosed === item?.title;
                return (
                    <button onClick={() => setChoosed(item?.title)} className={`h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] ${isChoosed ? 'bg-white text-[#101010]' : 'bg-onBg text-white'}`} key={itemList}>
                        <img className="h-[1.6rem]" src={item?.icon} alt={`tab_${item?.title}`} />
                        <span className="text-[1.6rem]">{item?.title}</span>
                    </button>
                )
            })}
        </div>
    )
}