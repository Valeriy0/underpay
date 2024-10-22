import React from "react";
import { Item } from "./Item";

export const List = () => {
    return (
        <div className="px-[0.8rem] flex flex-col w-full">
            <div className="flex flex-col w-full px-[0.8rem] bg-onBg rounded-[3.2rem]">
                {new Array(3).fill({}).map((item, itemIndex) => {
                    return <Item />
                })}
            </div>
        </div>
    )
}