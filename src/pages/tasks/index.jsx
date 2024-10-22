import React from "react";
import { BaseLayout } from "../../layouts/BaseLayout";
import { TaskItem } from "../../features/Tasks/Item";

export const Tasks = () => {
    return (
        <BaseLayout className="px-[1.6rem] pt-[3.2rem]">
            <span className="text-[2.4rem] font-medium leading-[3.2rem] text-white mb-[2.4rem]">Задания</span>
            <div className="w-full flex flex-col space-y-[1.6rem]">
                {new Array(3).fill({}).map((item, itemIndex) => {
                    return <TaskItem />
                })}
            </div>
        </BaseLayout>
    )
}