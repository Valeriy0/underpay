import React, { useEffect } from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { Menu } from "../../features/Main/Menu";
import { Slider } from "../../features/Main/Slider";
import { PopularList } from "../../features/Main/PopularList";
import { useRequest } from "../../helpers/hooks/useRequest";
import { UserRepository } from "../../connectors/repositories/user";

export const Main = () => {
    const { call, data } = useRequest(UserRepository.getBanners);

    useEffect(() => {
        call();
    }, [])

    console.log(data);
    return (
        <BaseLayout withMenu className="space-y-[2rem]">
            <Slider />
            <div className="flex flex-col px-[0.8rem] w-full space-y-[2rem]">
                <Menu />
                <PopularList />
            </div>
        </BaseLayout>
    )
}