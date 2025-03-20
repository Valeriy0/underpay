import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Product/Info";
import { List } from "../../features/Product/List";
import { useParams } from "react-router-dom";
import { useRequest } from "../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../connectors/repositories/product";

export const Product = () => {
    const { itemId } = useParams();  

    const { data, call, isLoading } = useRequest(ProductsRepository.getProducts);

    useEffect(() => {
        if (itemId) {
            call([{ productId: itemId }])
        }
    }, [itemId])

    return (
        <BaseLayout className='space-y-[2rem]'>
            <Info {...data?.data} />
            <List list={data?.data?.mooGoldItems} />
        </BaseLayout>
    )
}