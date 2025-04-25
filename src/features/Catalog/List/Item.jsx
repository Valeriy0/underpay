import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, productImageUrl, name, isNew = false, category }) => {

    const itemBg = productImageUrl ? {
        backgroundImage: `url(${productImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      } : null;

    return (
        <Link to={`/catalog/${id}`} className="relative flex-shrink-0 w-full flex flex-col justify-start h-full hover:opacity-50">
            {isNew && (
                <div className="absolute right-[0.8rem] top-[0.8rem] rounded-[3.2rem] bg-[#0AC300] px-[0.8rem] py-[0.4rem] flex items-center justify-center">
                    <span className="text-white text-[1.2rem] font-medium">New</span>
                </div>
            )}
            <div style={itemBg} className="mb-[1.2rem] flex-shrink-0 w-full h-[17.5rem] w-full bg-onBg rounded-[3.2rem] flex items-center justify-center">
                {!productImageUrl && (
                    <img className="w-[3rem] h-[3rem]" src="/icons/emptyImage.svg" />
                )}
            </div>
            <div className="text-left px-[0.8rem]">
                <span className="text-white text-[1.6rem]">{name}</span>
            </div>
            {category?.name && (
                <div className="w-fit mt-[1.2rem] bg-white-100 flex items-center justify-center p-[0.8rem] rounded-[3.2rem] space-x-[0.4rem]">
                    <img className="rounded-full w-[1.4rem] h-[1.4rem]" src={category?.imageUrl} alt="" />
                    <span className="text-[1.4rem] text-white">{category?.name}</span>
                </div>
            )}
        </Link>
    )
}