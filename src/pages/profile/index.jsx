import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Profile/Info";
import { Balance } from "../../features/Profile/Balance";
import { Menu } from "../../features/Profile/Menu";
import { useRequest } from "../../helpers/hooks/useRequest";
import { UserRepository } from "../../connectors/repositories/user";
import { motion } from "framer-motion"; 

export const Profile = () => {
    const { data, call, isLoading } = useRequest(UserRepository.getProfile);

    useEffect(() => {
        call();
    }, [])

    return (
        <BaseLayout withMenu className="px-[1.6rem]">
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Info {...data?.data?.user?.telegramAccount} isLoading={isLoading} />
                <Balance balance={data?.data?.user?.balanceUsd || 0} isLoading={isLoading} />
                <Menu />
            </motion.div>
        </BaseLayout>
    )
}