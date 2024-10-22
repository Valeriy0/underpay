import React from "react";
import { Item } from "./Item";

export const List = () => {
    return (
        <div className="flex flex-col space-y-[1.2rem] w-full px-[0.8rem]">
            {new Array(3).fill({}).map((item, itemIndex) => {
                return <Item />
            })}
        </div>
    )
}