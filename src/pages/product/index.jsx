import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Product/Info";
import { List } from "../../features/Product/List";

export const Product = () => {
    return (
        <BaseLayout className='space-y-[2rem]'>
            <Info />
            <List />
        </BaseLayout>
    )
}