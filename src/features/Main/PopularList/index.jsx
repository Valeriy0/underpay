import React, { useEffect } from "react";
import { Item } from "./Item";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../../connectors/repositories/product";

const ItemSkeleton = () => (
    <div className="relative flex-shrink-0 w-[14rem] flex flex-col justify-start h-full">
        <div className="mb-[1.2rem] flex-shrink-0 w-full h-[14rem] bg-onBg rounded-[3.2rem] animate-pulse" />
        <div className="text-left px-[0.8rem]">
            <div className="h-[1.6rem] w-3/4 bg-onBg rounded animate-pulse" />
        </div>
    </div>
);

export const PopularList = () => {
    const { call, data, isLoading } = useRequest(ProductsRepository.getProducts, [{isPopular: true, page: 0}]);
    
    useEffect(() => {
        call();
    }, [])

    const titleBg = {
        backgroundImage: `url('/images/main/popular/titleBg.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="flex items-center justify-start h-[18.8rem] space-x-[0.8rem] overflow-x-auto overflow-y-hidden invisible-scrollbar">
            <div style={titleBg} className="flex-shrink-0 w-[14rem] h-full bg-[#3B46F0] rounded-[3.2rem] pt-[2.4rem] pl-[1.2rem]">
                <span className="text-[1.6rem] font-medium text-white">Пополярное</span>
            </div>
            {isLoading ? (
                <>
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                </>
            ) : (
                !!data && data?.data?.products.map((item, itemIndex) => (
                    <Item {...item} key={itemIndex} />
                ))
            )}
        </div>
    )
}