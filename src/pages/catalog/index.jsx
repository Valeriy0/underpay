import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { CategoriesRepository } from "../../connectors/repositories/categories";
import { useSearchParams } from "react-router-dom";

export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [choosedCategoryId, setChoosedCategoryId] = useState(null);

    const { data: dataCategory, call, isLoading } = useRequest(CategoriesRepository.getCategories);

    useEffect(() => {
        if (searchParams?.get('categoryId')) {
            setChoosedCategoryId(searchParams?.get('categoryId'))
        }
    }, [searchParams])

    useEffect(() => {
        call();
    }, [])

    return (
        <BaseLayout withMenu>
            <Tabs choosedCategoryId={choosedCategoryId} setSearchParams={setSearchParams} list={dataCategory?.data} />
            <List choosedCategoryId={choosedCategoryId} />
        </BaseLayout>
    )
}