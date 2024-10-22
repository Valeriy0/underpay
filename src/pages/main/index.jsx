import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Menu } from "../../features/Main/Menu";
import { PopularList } from "../../features/Main/PopularList";

export const Main = () => {
    return (
        <BaseLayout withMenu className="space-y-[2rem]">
            <div className="h-[32rem] w-full bg-onBg rounded-b-[3.2rem]"></div>
            <div className="flex flex-col px-[0.8rem] w-full space-y-[2rem]">
                <Menu />
                <PopularList />
            </div>
        </BaseLayout>
    )
}