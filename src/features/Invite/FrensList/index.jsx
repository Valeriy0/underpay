import React from "react";
import { Item } from "./Item";

export const FrensList = () => {

    const listLen = 4;

    return (
        <div className="flex flex-col w-full space-y-[1.6rem]">
            <div className="flex items-center justify-start space-x-[0.4rem]">
                <span className="text-[1.6rem] text-white-500">Друзья</span>
                <span className="text-[1.6rem] text-white-500">{listLen}</span>
            </div>
            <div className="flex flex-col space-y-[1.2rem]">
                {new Array(listLen).fill({}).map((item, itemIndex) => {
                    return <Item key={itemIndex} />
                })}
            </div>
        </div>
    )
}