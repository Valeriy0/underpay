import React, { useEffect, useMemo } from "react";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { BannersRepository } from "../../../connectors/repositories/banners";

export const Slider = () => {

    const { data, call, isDone } = useRequest(BannersRepository.getBanners);

    useEffect(() => {
        call();
    }, [])

    return (
        <div className="relative h-[32rem] w-full bg-onBg rounded-b-[3.2rem] overflow-hidden">
        <div className="carousel w-full h-full">
            {isDone && data?.data?.banners?.map((item, itemIndex) => {
                return (
                    <div id={`banner-${item?.id}`} className="carousel-item w-full" key={itemIndex}>
                        <img
                        src={item?.bannerImageUrl}
                        className="w-full" />
                    </div>
                )
            })}
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex w-full justify-center gap-2 py-2">
            {isDone && data?.data?.banners?.map((item, itemIndex) => {
                return (
                    <a href={`#banner-${item?.id}`} className="btn btn-xs">{itemIndex}</a>
                )
            })}
        </div>
        </div>
    )
}