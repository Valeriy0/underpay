import React from 'react';
import { BottomMenu } from '../../components/BottomMenu';

export const BaseLayout = ({ children, className, withMenu = false }) => {
  return (
    <div className="flex items-center justify-center">
      <div className={`relative bg-mainBg flex flex-col items-center justify-start w-screen h-screen max-w-[39rem] `}>
        <div className={`flex flex-col items-center justify-start h-full w-full overflow-hidden overflow-y-auto ${className}`}>
          {children}
        </div>
        {withMenu && (
          <BottomMenu />
        )}
      </div>
    </div>
  );
};
