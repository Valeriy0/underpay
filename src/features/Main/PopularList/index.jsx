import React, { useEffect } from "react";
import { Item } from "./Item";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { PopularProductsRepository } from "../../../connectors/repositories/popular-products";

export const PopularList = () => {

    const { call, data, isLoading } = useRequest(PopularProductsRepository.getPopularProducts, [{page: 0}]);
    
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
            {!isLoading && data?.data?.popularProducts.map((item, itemIndex) => {
                return <Item {...item?.product} key={itemIndex} />;
            })}
        </div>
    )
}