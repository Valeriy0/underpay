import React from "react";
import { BOTTOM_MENU } from "../../helpers/menu";
import { Link } from "react-router-dom";

export const BottomMenu = () => {
    return (
        <div className="flex-shrink-0 sticky bottom-0 left-0 w-full flex items-start justify-center bg-onBg rounded-t-[3.2rem] h-fit">
            {BOTTOM_MENU?.map((item, itemIndex) => {
                const isActive = window.location.pathname.split('/')?.[1] === item?.url.split('/')?.[1];
                return (
                    <Link to={item?.url} className={`w-full h-[6rem] flex-1 flex justify-center items-center pt-[2rem] pb-[1.6rem] ${isActive ? 'opacity-100' : 'opacity-30'}`} key={itemIndex}>
                        <img className="w-[2.4rem] h-[2.4rem]" src={item?.icon} alt="" />
                    </Link> 
                )
            })}
            
        </div>
    )
}