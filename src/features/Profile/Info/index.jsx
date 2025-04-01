import React from "react";

export const Info = ({ firstName = '', lastName = '', username = '', photoUrl = '', isLoading }) => {

    const profileBg = {
        backgroundImage: `url(${photoUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    if (!isLoading) {
        return (
            <div className="flex flex-col items-center justify-center space-y-[1.2rem] pt-[3.6rem] mb-[2rem]">
                <div className="rounded-full h-[10rem] w-[10rem] bg-white/20 animate-pulse" />
                <div className="flex flex-col items-center justify-center space-y-[0.4rem]">
                    <div className="h-[2.4rem] w-[16rem] bg-white/20 rounded-full animate-pulse" />
                    <div className="h-[1.4rem] w-[8rem] bg-white/20 rounded-full animate-pulse" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-[1.2rem] pt-[3.6rem] mb-[2rem]">
            <div style={profileBg} className="rounded-full h-[10rem] w-[10rem]"></div>
            <div className="flex flex-col items-center justify-center space-y-[0.4rem]">
                <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white">{firstName} {lastName}</span>
                <span className="text-[1.4rem] leading-[140%] text-white-500">@{username}</span>
            </div>
        </div>
    )
}