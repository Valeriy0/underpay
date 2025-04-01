import React from "react";

export const Info = ({ name, description, productImageUrl, backgroundImageUrl, isLoading = false }) => {
    const itemBg = backgroundImageUrl ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      } : {};

    const itemPhoto = productImageUrl ? {
        backgroundImage: `url(${productImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      } : {};

    if (isLoading) {
        return (
            <div className="w-full animate-pulse">
                <div className="relative w-full h-[18rem] flex items-start justify-center">
                    <div className="h-[12rem] w-full bg-onBg"></div>
                    <div className="absolute left-[0.3rem] top-[7rem] w-[10rem] h-[10rem] rounded-[3.2rem] border-[0.5rem] border-solid border-[#101010] bg-onBg">
                        <div className="w-full h-full rounded-[2.6rem] bg-onBg"></div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-start items-start space-y-[0.8rem] px-[0.8rem]">
                    <div className="h-[3.2rem] w-3/4 bg-onBg rounded"></div>
                    <div className="h-[1.4rem] w-full bg-onBg rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="relative w-full h-[18rem] flex items-start justify-center">
                <div style={itemBg} className="h-[12rem] w-full"></div>
                <div className="absolute left-[0.3rem] top-[7rem] w-[10rem] h-[10rem] rounded-[3.2rem] border-[0.5rem] border-solid border-[#101010] bg-onBg">
                    <div style={itemPhoto} className="w-full h-full rounded-[2.6rem]"></div>
                </div>
            </div>
            
            <div className="flex flex-col justify-start items-start space-y-[0.8rem] px-[0.8rem]">
                <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white">{name}</span>
                <span className="text-[1.4rem] leading-[140%] text-white-500">{description}</span>
            </div>
        </div>
    )
}