import React from "react";

export const UserInfo = () => {

    const productBg = {
        backgroundImage: `url(/images/mockImages/popularMainGame.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    return (
        <div className="flex flex-col bg-onBg rounded-[3.2rem] w-full !mt-[2.4rem]">
                <div className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem]">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                            <img className="w-[2.4rem]" src='/images/buy/user.webp' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">1235366</span>
                            <span className="text-white-500 text-[1.6rem]">ID Игрока</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem]">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                        <img className="w-[2.4rem]" src='/images/buy/mail.webp' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">dfsfsfd@mail.ru</span>
                            <span className="text-white-500 text-[1.6rem]">Email</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}