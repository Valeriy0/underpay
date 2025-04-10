import React from "react";
import { Item } from "./Item";

const ItemPlaceholder = () => (
    <div className="w-full flex items-center justify-between p-[1.6rem] bg-onBg rounded-[3.2rem] animate-pulse">
        <div className="flex items-center space-x-[1.2rem]">
            <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-lightBg" />
            <div className="flex flex-col space-y-[0.8rem]">
                <div className="w-[12rem] h-[1.6rem] bg-lightBg rounded" />
                <div className="w-[8rem] h-[1.2rem] bg-lightBg rounded" />
            </div>
        </div>
        <div className="w-[6rem] h-[2.4rem] bg-lightBg rounded" />
    </div>
);

export const List = ({ data, isLoading }) => {
    if (isLoading) {
        return (
            <div className="flex flex-col space-y-[1.2rem] w-full px-[0.8rem]">
                <ItemPlaceholder />
                <ItemPlaceholder />
                <ItemPlaceholder />
                <ItemPlaceholder />
                <ItemPlaceholder />
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-[1.2rem] w-full px-[0.8rem]">
            {data?.map((item, itemIndex) => {
                return <Item key={itemIndex} {...item} />
            })}
        </div>
    )
}