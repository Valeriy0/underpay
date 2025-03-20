import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Cart/Tabs";
import { List } from "../../features/Cart/List";
import { PaymentsRepository } from "../../connectors/repositories/payments";
import { useRequest } from "../../helpers/hooks/useRequest";

export const Cart = () => {
    const [currentTab, setCurrentTab] = useState('pending');
    const { data, call, isLoading } = useRequest(PaymentsRepository.getHistory);

    useEffect(() => {
        if (currentTab) {
            call();
        }
    }, [currentTab])

    return (
        <BaseLayout withMenu>
            <Tabs />
            <List />
        </BaseLayout>
    )
}