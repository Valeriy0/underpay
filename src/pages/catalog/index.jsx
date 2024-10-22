import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Catalog/Tabs";
import { List } from "../../features/Catalog/List";

export const Catalog = () => {
    return (
        <BaseLayout withMenu>
            <Tabs />
            <List />
        </BaseLayout>
    )
}