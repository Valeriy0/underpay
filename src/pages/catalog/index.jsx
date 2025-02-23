import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";
import { useRequest } from "../../helpers/hooks/useRequest";
import { WithdrawalsRepository } from "../../connectors/repositories/withdrawals";

export const Catalog = () => {

    return (
        <BaseLayout withMenu>
            <Tabs />
            <List />
        </BaseLayout>
    )
}