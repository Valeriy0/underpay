import React from "react";
import { Item } from "./Item";

export const List = () => {

    const list = [
        {
            img: '/images/mockImages/popularMainGame.webp',
            title: 'Arena Breakout: Infinite',
            isNew: true,
            topic: '💎 Алмазики',
        },
        {
            img: '',
            title: 'Arena Breakout: Infinite',
            isNew: false,
            topic: '💰 Донаты',
        },
        {
            img: '',
            title: 'Arena Breakout: Infinite',
            isNew: false,
        },
      ]

    return (
        <div className="grid grid-cols-2 gap-x-[0.8rem] gap-y-[2.4rem] px-[0.8rem] overflow-y-auto">
            {list?.map((item, itemIndex) => {
                return <Item {...item} key={itemIndex} />
            })}
        </div>
    )
}