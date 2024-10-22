import React from "react";
import { Link } from "react-router-dom";

export const TaskItem = () => {

    const itemBg = {
        backgroundImage: `url(/images/mockImages/popularMainGame.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    return (
        <Link to={null} className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem] bg-onBg rounded-[3.2rem]">
            <div className="flex items-center justify-start space-x-[1.2rem]">
                <div style={itemBg} className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                </div>
                
                <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                    <span className="text-white text-[1.6rem] font-medium">Скачать фигню</span>
                    <span className="text-[#C6FE22] text-[1.6rem]">+ 500 бонусов</span>
                </div>
            </div>
            <img className="w-[2.4rem] opacity-50" src="/icons/arrow-right.svg" alt="" />
        </Link>
    )
}