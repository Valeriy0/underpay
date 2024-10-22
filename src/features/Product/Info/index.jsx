import React from "react";

export const Info = () => {

    const itemBg = {
        backgroundImage: `url(/images/mockImages/productBg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    const itemPhoto = {
        backgroundImage: `url(/images/mockImages/popularMainGame.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    return (
        <div className="w-full">
            <div className="relative w-full h-[18rem] flex items-start justify-center">
                <div style={itemBg} className="h-[12rem] w-full"></div>
                <div className="absolute left-[0.3rem] top-[7rem] w-[10rem] h-[10rem] rounded-[3.2rem] border-[0.5rem] border-solid border-[#101010] bg-onBg">
                    <div style={itemPhoto} className="w-full h-full rounded-[2.6rem]"></div>
                </div>
            </div>
            
            <div className="flex flex-col justify-start items-start space-y-[0.8rem] px-[0.8rem]">
                <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white">Arena Breakout: Infinite</span>
                <span className="text-[1.4rem] leading-[140%] text-white-500">Порази своих тимейтов крутыми скинами, или прокати на своей новой Машине, благодаря официальной покупке Юси и доната в Пабг Мобайл!</span>
            </div>
        </div>
    )
}