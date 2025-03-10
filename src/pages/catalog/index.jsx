import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { CategoriesRepository } from "../../connectors/repositories/categories";

export const Catalog = () => {
    const [choosedCategoryId, setChoosedCategoryId] = useState(null);

    const { data: dataCategory, call, isLoading } = useRequest(CategoriesRepository.getCategories);


    useEffect(() => {
        call();
    }, [])

    return (
        <BaseLayout withMenu>
            <Tabs choosedCategoryId={choosedCategoryId} setChoosedCategoryId={setChoosedCategoryId} list={dataCategory?.data} />
            <List choosedCategoryId={choosedCategoryId} />
        </BaseLayout>
    )
}