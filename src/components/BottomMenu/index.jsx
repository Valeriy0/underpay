import React, { useEffect, useState } from "react";
import { BOTTOM_MENU } from "../../helpers/menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
};

const menuTransition = {
  type: "spring",
  stiffness: 77,
  damping: 30,
  mass: 1.1
};

export const BottomMenu = () => {
    const [isFirstRender, setIsFirstRender] = useState(() => {
        return localStorage.getItem('menuFirstRender') !== 'false';
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('menuFirstRender');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        if (isFirstRender) {
            const timer = setTimeout(() => {
                setIsFirstRender(false);
                localStorage.setItem('menuFirstRender', 'false');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isFirstRender]);

    if (!isFirstRender) {
        return (
            <div className="flex-shrink-0 sticky bottom-0 left-0 w-full flex items-start justify-center bg-onBg rounded-t-[3.2rem] h-fit pb-[2rem]">
                {BOTTOM_MENU?.map((item, itemIndex) => {
                    const isActive = window.location.pathname.split('/')?.[1] === item?.url.split('/')?.[1];
                    return (
                        <Link to={item?.url} className={`w-full h-[6rem] flex-1 flex justify-center items-center pt-[2rem] pb-[1.6rem] ${isActive ? 'opacity-100' : 'opacity-30'}`} key={itemIndex}>
                            <img className="w-[2.4rem] h-[2.4rem]" src={item?.icon} alt="" />
                        </Link> 
                    )
                })}
            </div>
        );
    }

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            variants={menuVariants}
            transition={menuTransition}
            className="flex-shrink-0 sticky bottom-0 left-0 w-full flex items-start justify-center bg-onBg rounded-t-[3.2rem] h-fit pb-[2rem]"
        >
            {BOTTOM_MENU?.map((item, itemIndex) => {
                const isActive = window.location.pathname.split('/')?.[1] === item?.url.split('/')?.[1];
                return (
                    <Link to={item?.url} className={`w-full h-[6rem] flex-1 flex justify-center items-center pt-[2rem] pb-[1.6rem] ${isActive ? 'opacity-100' : 'opacity-30'}`} key={itemIndex}>
                        <img className="w-[2.4rem] h-[2.4rem]" src={item?.icon} alt="" />
                    </Link> 
                )
            })}
        </motion.div>
    );
}