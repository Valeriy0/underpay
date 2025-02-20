import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { WithdrawalsRepository } from "../../connectors/repositories/withdrawals";

export const Catalog = () => {

    const { call, data, isLoading } = useRequest(WithdrawalsRepository.getProducts)

    useEffect(() => {
        call([1, {}])
    }, [])

    console.log(data);

    return (
        <BaseLayout withMenu>
            <Tabs />
            <List data={data} isLoading={isLoading} />
        </BaseLayout>
    )
}