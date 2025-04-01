import React from "react";
import { Link } from "react-router-dom";

const MainCategoriesPlaceholder = () => {
    return (
        <div className="w-full flex items-center justify-center px-[0.8rem] py-[1.6rem] bg-onBg rounded-[3.2rem]">
            <div className="flex items-center justify-between w-full px-[2.4rem]">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex-1 flex flex-col items-center justify-center space-y-[0.8rem]">
                        <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-lightBg animate-pulse" />
                        <div className="w-[6rem] h-[1.6rem] bg-lightBg rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const MainCategories = ({ list, isLoading }) => {
    if (isLoading || !list?.length) {
        return <MainCategoriesPlaceholder />;
    }

    return (
        <div className="w-full flex items-center justify-center px-[0.8rem] py-[1.6rem] bg-onBg rounded-[3.2rem]">
            <div className="flex items-center justify-between w-full px-[2.4rem]">
                {list.map((item, itemIndex) => {
                    return (
                        <Link to={`/catalog?categoryId=${item?.id}`} className="flex-1 flex flex-col items-center justify-center space-y-[0.8rem]" key={itemIndex}>
                            <div className="w-[4.8rem] h-[4.8rem] flex items-center justify-center rounded-full bg-lightBg">
                                <img className="w-[2.4rem]" src={item?.icon} alt={`menu_${item?.name}`} />
                            </div>
                            <span className="text-[1.6rem] leading-normal text-white">{item?.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}