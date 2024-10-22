import React from "react";
import { Item } from "./Item";

export const PopularList = () => {

    const titleBg = {
        backgroundImage: `url('/images/main/popular/titleBg.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };

      const list = [
        {
            img: '/images/mockImages/popularMainGame.webp',
            title: 'Arena Breakout: Infinite',
            isNew: true,
        },
        {
            img: '',
            title: 'Arena Breakout: Infinite',
            isNew: false,
        },
        {
            img: '',
            title: 'Arena Breakout: Infinite',
            isNew: false,
        },
      ]

    return (
        <div className="flex items-center justify-start h-[18.6rem] space-x-[0.8rem] overflow-x-auto overflow-y-hidden">
            <div style={titleBg} className="flex-shrink-0 w-[14rem] h-full bg-[#3B46F0] rounded-[3.2rem] pt-[2.4rem] pl-[1.2rem]">
                <span className="text-[1.6rem] font-medium text-white">Пополярное</span>
            </div>
            {list.map((item, itemIndex) => {
                return <Item {...item} key={itemIndex} />;
            })}
        </div>
    )
}