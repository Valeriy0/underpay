import React from "react";
import { TAB_MENU } from "../../../helpers/menu";
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <div className="w-full flex items-center justify-center px-[0.8rem] py-[1.6rem] bg-onBg rounded-[3.2rem]">
            <div className="flex items-center justify-between w-full px-[2.4rem]">
                {TAB_MENU?.map((item, itemIndex) => {
                    return (
                        <Link to="/catalog" className="flex-1 flex flex-col items-center justify-center space-y-[0.8rem]" key={itemIndex}>
                            <div className="w-[4.8rem] h-[4.8rem] flex items-center justify-center rounded-full bg-lightBg">
                                <img className="w-[2.4rem]" src={item?.icon} alt={`menu_${item?.title}`} />
                            </div>
                            <span className="text-[1.6rem] leading-normal text-white">{item?.title}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}