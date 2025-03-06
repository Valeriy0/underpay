import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { WithdrawalsRepository } from "../../connectors/repositories/withdrawals";
import { CategoriesRepository } from "../../connectors/repositories/categories";
import { ProductsRepository } from "../../connectors/repositories/product";

export const Catalog = () => {
    const [choosedCategory, setChoosedCategory] = useState('');

    const { data: dataCategory, call, isLoading } = useRequest(CategoriesRepository.getCategories);
    const { data: dataProducts, call: callProducts, isLoading: isLoadingProducts } = useRequest(ProductsRepository.getProductsWithCategory)


    useEffect(() => {
        call();
    }, [])

    return (
        <BaseLayout withMenu>
            <Tabs list={dataCategory?.data} />
            <List />
        </BaseLayout>
    )
}