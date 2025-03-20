import React from "react";
import { useSearchParams } from "react-router-dom";

export const ProductInfo = ({ data = {} }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const itemId = searchParams.get('itemId');
    const currentItem = data?.mooGoldItems?.find(item => Number(item.productId) === Number(itemId)) || {};

    const productBg = {
        backgroundImage: `url(${data?.productImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };

    return (
        <div className="flex flex-col bg-onBg rounded-[3.2rem] w-full !mt-[2.4rem]">
                <div className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem]">
                        <div style={productBg} className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">{data?.name}</span>
                            <span className="text-white-500 text-[1.6rem]">{data?.category?.name}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full space-x-[1.2rem] p-[1.2rem]">
                    <div className="flex items-center justify-start space-x-[1.2rem]">
                        <div className="h-[6rem] w-[6rem] flex items-center justify-center bg-lightBg rounded-full">
                            <img className="h-[4rem]" src='/images/mockImages/cartItem.png' alt="" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-center space-y-[0.4rem]">
                            <span className="text-white text-[1.6rem] font-medium">{currentItem?.name}</span>
                            <span className="text-white-500 text-[1.6rem]">Продукт</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-[0.4rem]">
                        <span className="text-white-500 text-[1.6rem]">{currentItem?.priceUsd}$</span>
                    </div>
                </div>
            </div>
    )
}