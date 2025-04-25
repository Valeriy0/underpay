import React from 'react';
import { motion } from 'framer-motion';
import { BottomMenu } from '../../components/BottomMenu';

const pageVariants = {
  initial: {
    opacity: 0,
    y: -100
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -100
  }
};

const pageTransition = {
  type: "spring",
  stiffness: 77,
  damping: 30,
  mass: 1.1
};

export const BaseLayout = ({ children, className, withMenu = false }) => {
  return (
    <div className="flex items-center justify-center bg-mainBg w-screen h-screen">
      <div className={`relative flex flex-col items-center justify-start w-full h-full max-w-[39rem]`}>
        <div
          className={`flex flex-col items-center justify-start h-full w-full overflow-hidden overflow-y-auto invisible-scrollbar ${className}`}
        >
          {children}
        </div>
        {withMenu && (
          <BottomMenu />
        )}
      </div>
    </div>
  );
};
