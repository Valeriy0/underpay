import React from "react";
import { Item } from "./Item";

const ItemSkeleton = () => {
    return (
        <div className="relative flex-shrink-0 w-full flex flex-col justify-start h-full">
            <div className="mb-[1.2rem] flex-shrink-0 w-full h-[17.5rem] bg-onBg rounded-[3.2rem] animate-pulse" />
            <div className="text-left px-[0.8rem]">
                <div className="h-[1.6rem] w-3/4 bg-onBg rounded animate-pulse" />
            </div>
            <div className="w-fit mt-[1.2rem] h-[3.6rem] w-[8rem] bg-onBg rounded-[3.2rem] animate-pulse" />
        </div>
    );
};

export const List = ({ data, isLoading }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-x-[0.8rem] gap-y-[2.4rem] px-[0.8rem] overflow-y-auto invisible-scrollbar pb-[2.4rem]">
            {isLoading ? (
                <>
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                </>
            ) : (
                data?.map((item, itemIndex) => (
                    <Item {...item} key={itemIndex} />
                ))
            )}
        </div>
    )
}