import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Tabs } from "../../features/Cart/Tabs";
import { List } from "../../features/Cart/List";
import { PaymentsRepository } from "../../connectors/repositories/payments";
import { useRequest } from "../../helpers/hooks/useRequest";

const STATUSES = [{
    id: 1,
    type: 'pending',
    name: 'Ожидает оплаты',
}, {
    id: 2,
    type: 'completed',
    name: 'Завершено',
}]

export const Cart = () => {
    const [currentStatus, setCurrentStatus] = useState(STATUSES[0]);
    const { data, call, isLoading } = useRequest(PaymentsRepository.getHistory);

    useEffect(() => {
        if (currentStatus) {
            call([{ status: currentStatus.id }]);
        }
    }, [currentStatus])

    return (
        <BaseLayout withMenu>
            <Tabs currentStatus={currentStatus} statuses={STATUSES} setCurrentStatus={setCurrentStatus} />
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <List data={data?.data?.payments} isLoading={isLoading} />
            </motion.div>
        </BaseLayout>
    )
}