import React, { useState } from "react";
import { Search } from "./SearchComp";

export const Tabs = ({ setSearchParams, list, isLoading }) => {
    const [choosedId, setChoosedId] = useState(null);
    const [isOpenedSearch, setIsOpenedSearch] = useState(false);

    const toggleTab = (tabId) => {
        if (choosedId === tabId) {
            setSearchParams((params) => {
                params.delete('categoryId');
                return params;
            }); 
            setChoosedId(null)
        } else {
            setSearchParams((params) => {
                params.set('categoryId', tabId);
                    return params;
            }); 
            setChoosedId(tabId)
        }
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
                    const isChoosed = choosedId === item?.id;

                    return (
                        <button onClick={() => toggleTab(item?.id)} className={`whitespace-nowrap h-[4.8rem] flex items-center justify-center px-[2rem] space-x-[0.8rem] rounded-[3.2rem] hover:opacity-50 ${isChoosed ? 'bg-white text-[#101010]' : 'bg-onBg text-white'}`} key={itemList}>
                            {!!item?.imageUrl && (
                                <div 
                                    className="h-[2.4rem] w-[2.4rem] rounded-full" 
                                    style={{ backgroundImage: `url(${item?.imageUrl})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                                    aria-label={`Иконка ${item?.name}`}
                                />
                            )}
                            <span className="text-[1.6rem]">{item?.name}</span>
                        </button>
                    )
                })
            )}
        </div>
    )
}