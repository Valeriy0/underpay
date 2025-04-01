import React from "react";
import { Item } from "./Item";

export const List = ({ list, isLoading }) => {
    
    if (!list) {    
        return null;
    }

    if (isLoading) {
        return (
            <div className="px-[0.8rem] flex flex-col w-full">
                <div className="flex flex-col w-full px-[0.8rem] bg-onBg rounded-[3.2rem]">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="w-full h-[18rem] flex items-start justify-center">
                                <div className="h-[12rem] w-full bg-gray-700"></div>
                                <div className="absolute left-[0.3rem] top-[7rem] w-[10rem] h-[10rem] rounded-[3.2rem] border-[0.5rem] border-solid border-[#101010] bg-onBg">
                                    <div className="w-full h-full rounded-[2.6rem] bg-gray-600"></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-[0.8rem] px-[0.8rem]">
                                <div className="h-[3.2rem] w-3/4 bg-gray-700 rounded"></div>
                                <div className="h-[1.4rem] w-full bg-gray-700 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="px-[0.8rem] flex flex-col w-full">
            <div className="flex flex-col w-full px-[0.8rem] bg-onBg rounded-[3.2rem]">
                {list.map((item, itemIndex) => {
                    return <Item {...item} key={itemIndex} />
                })}
            </div>
        </div>
    )
}