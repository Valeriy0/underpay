import React from "react";
import { Item } from "./Item";

export const List = ({ list }) => {
    
    if (!list) {    
        return null;
    }

    console.log(list);

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