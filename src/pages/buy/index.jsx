import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { ProductInfo } from "../../features/Buy/ProductInfo";
import { UserInfo } from "../../features/Buy/UserInfo";
import { Payment } from "../../features/Buy/Payment";
import { Total } from "../../features/Buy/Total";

export const Buy = () => {
    return (
        <BaseLayout className="pt-[3.2rem] pb-[4.8rem] px-[0.8rem] space-y-[1.6rem] overflow-y-auto invisible-scrollbar">
            <span className="text-[2.4rem] leading-[3.2rem] font-medium text-white">Оформление покупки</span>
            <ProductInfo />
            <UserInfo />
            <Payment />
            <Total />
            <button className="bg-[#C6FE22] w-full rounded-[3.2rem] py-[2.4rem] px-[3.6rem]">
                <span className="text-[#101010] text-[1.6rem] font-medium">Создать покупку</span>
           </button>
        </BaseLayout>
    )
}