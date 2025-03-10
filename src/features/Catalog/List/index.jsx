import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../../connectors/repositories/product";

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
            {!isLoading && data?.data?.products?.map((item, itemIndex) => {
                return <Item {...item} key={itemIndex} />
            })}
        </div>
    )
}