import React, { useEffect, useMemo, useState } from "react";
import { useRequest } from "../../../helpers/hooks/useRequest";
import { BannersRepository } from "../../../connectors/repositories/banners";

const ProgressIndicator = ({ isActive }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setProgress(0);
            return;
        }

        const startTime = Date.now();
        const duration = 10000; // 10 секунд

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(interval);
            }
        }, 16); // Обновляем примерно 60 раз в секунду для плавности

        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="relative h-2 w-10 bg-gray-400 rounded-full overflow-hidden">
            <div 
                className="absolute top-0 left-0 h-full bg-white transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export const Slider = () => {
    const { data, call, isDone } = useRequest(BannersRepository.getBanners);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        call();
    }, []);

    useEffect(() => {
        if (!isDone || !data?.data?.banners?.length) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => 
                prev === data.data.banners.length - 1 ? 0 : prev + 1
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [isDone, data]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-[32rem] w-full bg-onBg rounded-b-[3.2rem] overflow-hidden">
            <div className="carousel w-full h-full">
                {isDone && data?.data?.banners?.map((item, itemIndex) => {
                    return (
                        <div 
                            id={`banner-${item?.id}`} 
                            className="carousel-item w-full" 
                            key={itemIndex}
                            style={{ display: itemIndex === currentSlide ? 'block' : 'none' }}
                        >
                            <img
                                src={item?.imageUrl}
                                alt={item?.bannerAltText || ""}
                                className="w-full h-full object-cover object-center" 
                            />
                        </div>
                    )
                })}
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex w-full justify-center gap-2 py-2">
                {isDone && data?.data?.banners?.map((item, itemIndex) => {
                    return (
                        <button 
                            key={itemIndex}
                            onClick={() => handleSlideChange(itemIndex)}
                            className="h-2"
                        >
                            {itemIndex === currentSlide ? (
                                <ProgressIndicator isActive={true} />
                            ) : (
                                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}