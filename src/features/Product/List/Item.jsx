import React from "react";
import { Link } from "react-router-dom";

export const Item = () => {
    return (
        <Link to={'/buy'} className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
            <div className="flex items-center justify-start space-x-[1.2rem]">
                <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                    <img className="h-[4rem]" src='/images/mockImages/cartItem.png' alt="" />
                </div>
                
                <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                    <span className="text-white text-[1.6rem] font-medium">Elite Pass Plus A9 </span>
                    <span className="text-white-500 text-[1.6rem]">12 минут</span>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-[0.4rem]">
                <span className="text-white-500 text-[1.6rem]">3700 ₽</span>
                <img className="w-[2.4rem] opacity-50" src="/icons/arrow-right.svg" alt="" />
            </div>
            
        </Link>
    )
}