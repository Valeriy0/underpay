import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Profile/Info";
import { Balance } from "../../features/Profile/Balance";
import { Menu } from "../../features/Profile/Menu";
import { useRequest } from "../../helpers/hooks/useRequest";
import { UserRepository } from "../../connectors/repositories/user";

export const Profile = () => {
    const { data, call, isLoading } = useRequest(UserRepository.getProfile);

    useEffect(() => {
        call();
    }, [])

    console.log(data?.data, data?.data?.user)

    return (
        <BaseLayout withMenu className="px-[1.6rem]">
            {data?.data?.user?.balanceUsd}
            <Info />
            <Balance balance={data?.data?.user?.balanceUsd || 0} />
            <Menu />
        </BaseLayout>
    )
}