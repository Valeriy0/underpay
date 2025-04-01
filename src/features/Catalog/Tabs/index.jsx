import React, { useState } from "react";
import { TAB_MENU } from "../../../helpers/menu";
import { Search } from "./SearchComp";

export const Tabs = ({ setSearchParams, list, isLoading }) => {
    const [choosed, setChoosed] = useState(TAB_MENU[0]?.title);
    const [isOpenedSearch, setIsOpenedSearch] = useState(false);

    const chooseTab = (tab) => {
        setSearchParams((params) => {
            params.set('categoryId', tab?.id);
            return params;
        });
        setChoosed(tab?.name)
    }

    const renderPlaceholders = () => {
        return Array(3).fill(null).map((_, index) => (
            <div 
                key={`placeholder-${index}`}
                className="whitespace-nowrap h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] bg-onBg animate-pulse"
            >
                <div className="h-[1.6rem] w-[1.6rem] bg-white/20 rounded-full" />
                <div className="h-[1.6rem] w-[8rem] bg-white/20 rounded-full" />
            </div>
        ));
    };

    return (
        <div className="flex-shrink-0 w-full py-[1.6rem] px-[0.8rem] flex items-center justify-start space-x-[0.4rem] overflow-x-auto overflow-y-hidden invisible-scrollbar">
            <Search isOpened={isOpenedSearch} setIsOpened={setIsOpenedSearch} />
            {!isOpenedSearch && isLoading ? (
                renderPlaceholders()
            ) : (
                !isOpenedSearch && !!list && list?.map((item, itemList) => {
                    const isChoosed = choosed === item?.title;
                    return (
                        <button onClick={() => chooseTab(item)} className={`whitespace-nowrap h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] ${isChoosed ? 'bg-white text-[#101010]' : 'bg-onBg text-white'}`} key={itemList}>
                            <img className="h-[1.6rem]" src={item?.icon} alt={`Иконка ${item?.name}`} />
                            <span className="text-[1.6rem]">{item?.name}</span>
                        </button>
                    )
                })
            )}
        </div>
    )
}