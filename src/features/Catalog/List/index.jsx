import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../../connectors/repositories/product";

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

export const List = ({ choosedCategoryId }) => {
    const [page, setPage] = useState(0);
    const { data, call, isLoading, resetData } = useRequest(ProductsRepository.getProducts);

    useEffect(() => {
        resetData();
        if (choosedCategoryId) {
            call([{ page: page, categoryId: choosedCategoryId }])
        } else {
            call([{ page: page }]);
        }
    }, [page, choosedCategoryId])

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
                data?.data?.products?.map((item, itemIndex) => (
                    <Item {...item} key={itemIndex} />
                ))
            )}
        </div>
    )
}