import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Info } from "../../features/Profile/Info";
import { Balance } from "../../features/Profile/Balance";
import { Menu } from "../../features/Profile/Menu";

export const Profile = () => {
    return (
        <BaseLayout withMenu className="px-[1.6rem]">
            <Info />
            <Balance />
            <Menu />
        </BaseLayout>
    )
}