import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ icon, title, desc, url }) => {
    return (
        <Link to={url} className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
            <div className="flex items-center justify-start space-x-[1.2rem]">
                <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                    <img className="h-[2.9rem]" src={icon} alt="" />
                </div>
                
                <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                    <span className="text-white text-[1.6rem] font-medium">{title}</span>
                    <span className="text-white-500 text-[1.6rem]">{desc}</span>
                </div>
            </div>
            <img className="w-[2.4rem] opacity-50" src="/icons/arrow-right.svg" alt="" />
        </Link>
    )
}