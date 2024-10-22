import React from "react";

export const Info = () => {

    const profileBg = {
        backgroundImage: `url(/images/mockImages/profileImage.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    return (
        <div className="flex flex-col items-center justify-center space-y-[1.2rem] pt-[3.6rem] mb-[2rem]">
            <div style={profileBg} className="rounded-full h-[10rem] w-[10rem]"></div>
            <div className="flex flex-col items-center justify-center space-y-[0.4rem]">
                <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white">Ivan Ivanov</span>
                <span className="text-[1.4rem] leading-[140%] text-white-500">asdas@gmail.com</span>
            </div>
        </div>
    )
}