import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { CategoriesRepository } from "../../connectors/repositories/categories";
import { useSearchParams } from "react-router-dom";
import { ProductsRepository } from "../../connectors/repositories/product";
import { motion } from "framer-motion";
export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [choosedCategoryId, setChoosedCategoryId] = useState(searchParams?.get('categoryId'));

    const { data: dataCategory, call, isLoading } = useRequest(CategoriesRepository.getCategories);

    useEffect(() => {
        setChoosedCategoryId(searchParams?.get('categoryId') || null)
    }, [searchParams])

    useEffect(() => {
        call();
    }, [])

    const [page, setPage] = useState(0);
    const { data: dataProducts, call: callProducts, isLoading: isLoadingProducts, resetData } = useRequest(ProductsRepository.getProducts);

    useEffect(() => {
        resetData();
        if (choosedCategoryId) {
            callProducts([{ page: page, categoryId: choosedCategoryId }])
        } else {
            callProducts([{ page: page }])
        }
    }, [page, choosedCategoryId])

    return (
        <BaseLayout withMenu>
            <Tabs choosedCategoryId={choosedCategoryId} setSearchParams={setSearchParams} list={dataCategory?.data} isLoading={isLoading} />
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <List data={dataProducts?.data?.products} isLoading={isLoadingProducts} />
            </motion.div>
        </BaseLayout>
    )
}