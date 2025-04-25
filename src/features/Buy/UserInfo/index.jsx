import React from "react";

export const UserInfo = ({ email, setEmail }) => {
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
                        
                        <div className="transition-all duration-300 flex flex-col items-start justify-center space-y-[0.4rem]">
                            <input 
                                className="text-white text-[1.6rem] font-medium bg-transparent outline-none" 
                                placeholder="Введите email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className={`text-white-500 text-[1.6rem] transition-all duration-300 ${email ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>Email</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}