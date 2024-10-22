import React from "react";
import { PROFILE_MENU } from "../../../helpers/menu";
import { Item } from "./Item";

export const Menu = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-onBg rounded-[3.2rem]">
            {PROFILE_MENU?.map((item, itemIndex) => {
                return <Item {...item} key={itemIndex} />
            })}
        </div>
    )
}