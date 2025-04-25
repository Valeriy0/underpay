import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { MainCategories } from "../../features/Main/MainCategories";
import { Slider } from "../../features/Main/Slider";
import { PopularList } from "../../features/Main/PopularList";
import { useRequest } from "../../helpers/hooks/useRequest";
import { UserRepository } from "../../connectors/repositories/user";
import { CategoriesRepository } from "../../connectors/repositories/categories";
import { motion } from "framer-motion";

export const Main = () => {
    const { call, data } = useRequest(UserRepository.getBanners);
    const { call: callCategories, data: dataCategories, isLoading: isLoadingCategories } = useRequest(CategoriesRepository.getCategories, [{ isMain: true }]);

    useEffect(() => {
        call();
        callCategories();
    }, [])

    return (
        <BaseLayout withMenu className="space-y-[2rem]">
            <Slider />
            <motion.div
                className="flex flex-col px-[0.8rem] w-full space-y-[2rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <MainCategories list={dataCategories?.data} isLoading={isLoadingCategories} />
                <PopularList />
            </motion.div>
        </BaseLayout>
    )
}