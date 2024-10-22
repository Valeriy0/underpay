import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Cart/Tabs";
import { List } from "../../features/Cart/List";

export const Cart = () => {
    return (
        <BaseLayout withMenu>
            <Tabs />
            <List />
        </BaseLayout>
    )
}