import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { ProductInfo } from "../../features/Buy/ProductInfo";
import { UserInfo } from "../../features/Buy/UserInfo";
import { Payment } from "../../features/Buy/Payment";
import { Total } from "../../features/Buy/Total";
import { useRequest } from "../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../connectors/repositories/product";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PaymentsRepository } from "../../connectors/repositories/payments";

export const Buy = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, call, isLoading } = useRequest(ProductsRepository.getProducts);
    const { data: createData, call: createCall, isLoading: createIsLoading } = useRequest(PaymentsRepository.createOrder);

    const productId = searchParams.get('productId');
    const itemId = searchParams.get('itemId');
    
    useEffect(() => {
        if (productId) {
            call([{ productId: productId }])
        }
    }, [searchParams])

    const currentItem = data?.data?.mooGoldItems?.find(item => Number(item.productId) === Number(itemId)) || {};

    const onClickCreateOrder = async () => {
        if (productId && itemId) {
            createCall([{ 
                method_id: 1,
                amount: currentItem?.priceUsd,
                metadata: {
                    product_id: currentItem.productId,
                }
             }])
        }
    }
    

    return (
        <BaseLayout className="pt-[3.2rem] pb-[4.8rem] px-[0.8rem] space-y-[1.6rem] overflow-y-auto invisible-scrollbar">
            <span className="text-[2.4rem] leading-[3.2rem] font-medium text-white">Оформление покупки</span>
            <ProductInfo data={data?.data} />
            <UserInfo />
            <Payment />
            <Total />
            <button onClick={() => onClickCreateOrder()} className="bg-[#C6FE22] w-full rounded-[3.2rem] py-[2.4rem] px-[3.6rem]">
                <span className="text-[#101010] text-[1.6rem] font-medium">Создать покупку</span>
           </button>
        </BaseLayout>
    )
}