import React, { useState, useEffect, useMemo } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { ProductInfo } from "../../features/Buy/ProductInfo";
import { UserInfo } from "../../features/Buy/UserInfo";
import { Payment } from "../../features/Buy/Payment";
import { Total } from "../../features/Buy/Total";
import { useRequest } from "../../helpers/hooks/useRequest";
import { ProductsRepository } from "../../connectors/repositories/product";
import { useSearchParams } from "react-router-dom";
import { PaymentsRepository } from "../../connectors/repositories/payments";
import { OrderStatus } from "../../features/Buy/OrderStatus";

export const Buy = () => {
    const [orderStatus, setOrderStatus] = useState(null);
    const [currentProvider, setCurrentProvider] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, call, isLoading } = useRequest(ProductsRepository.getProducts);
    const { data: createData, call: createCall, isLoading: createIsLoading } = useRequest(PaymentsRepository.createOrder);

    const productId = searchParams.get('productId');
    const itemId = searchParams.get('itemId');
    const [orderId, setOrderId] = useState(searchParams.get('orderId'));

    const { data: providersData, call: providersCall, isLoading: providersIsLoading } = useRequest(PaymentsRepository.getProviders);
    const { data: orderData, call: orderCall, isLoading: orderIsLoading } = useRequest(PaymentsRepository.getOrder);
    const { data: orderStatusData, call: orderStatusCall, isLoading: orderStatusIsLoading } = useRequest(PaymentsRepository.getOrderStatus);

    useEffect(() => {
        if (createData?.data?.payment_id) {
            setOrderId(createData?.data?.payment_id);
        }
    }, [createData]);

    useEffect(() => {   
        providersCall();
    }, []);

    useEffect(() => {
        if (providersData?.data?.methods?.length > 0) {
            setCurrentProvider(providersData?.data?.methods[0]);
        }
    }, [providersData]);

    
    useEffect(() => {
        if (orderId) {
            orderCall([orderId])
            orderStatusCall([orderId])
            return;
        }
        if (productId) {
            call([{ productId: productId }])
        }
    }, [productId, orderId])

    const currentItem = data?.data?.mooGoldItems?.find(item => Number(item.productId) === Number(itemId)) || {};

    const onClickCreateOrder = async () => {
        if (productId && itemId) {
            createCall([{ 
                currencyCode: 'USD',
                methodId: 1,
                amount: Number(currentItem?.priceUsd) + Number(currentProvider?.fixedFee),
                metadata: {
                    product_id: currentItem.productId,
                    user_email: email,
                }
             }])
        }
    }

    const [email, setEmail] = useState('');

    const buttonInfo = useMemo(() => {
        if (orderData?.data?.id) {
            return {
                title: 'Оплатить',
                onClick: () => {}
            }
        }
        return {
            title: 'Создать покупку',
            onClick: () => onClickCreateOrder()
        }
    }, [orderData, currentItem, currentProvider]);

    const renderTitle = useMemo(() => {
        if (orderData?.data?.id) {
            return 'Покупка #' + orderData?.data?.id
        }
        return 'Оформление покупки'
    }, [orderData])
    

    return (
        <BaseLayout className="pt-[3.2rem] pb-[4.8rem] px-[0.8rem] space-y-[1.6rem] overflow-y-auto invisible-scrollbar">
            <span className="text-[2.4rem] leading-[3.2rem] font-medium text-white">{renderTitle}</span>
            <ProductInfo data={data?.data} />
            <UserInfo email={email} setEmail={setEmail} />
            {!orderData?.data?.id ? (
                <>
                    <Payment currentProvider={currentProvider} />
                    <Total currentItem={currentItem} currentProvider={currentProvider} />
                </>
            ) : (
                <OrderStatus orderData={orderData?.data} orderStatus={orderStatus} />
            )}
            <button onClick={() => buttonInfo?.onClick()} className="bg-[#C6FE22] w-full rounded-[3.2rem] py-[2.4rem] px-[3.6rem] hover:opacity-50">
                <span className="text-[#101010] text-[1.6rem] font-medium">{buttonInfo?.title}</span>
           </button>
        </BaseLayout>
    )
}