import React from "react";

export const Item = () => {
    return (
        <div className="flex items-center justify-between py-[0.8rem]">
            <div className="flex items-center justify-start space-x-[1.2rem]">
                <img className="h-[4.4rem] w-[4.4rem]" src="/images/invite/userPhoto.webp" alt="" />
                <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                    <span className="text-[1.6rem] font-medium text-white">ID 0xf052...92ee</span>
                    <span className="text-[1.6rem] text-white-500">12 may</span>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <span className="text-[#C6FE22] text-[1.6rem]">+ 500</span>
            </div>
        </div>
    )
}