import React from 'react';
import { BottomMenu } from '../../components/BottomMenu';
import { PageTransition } from '../../components/PageTransition';

export const BaseLayout = ({ children, className, withMenu = false }) => {
  return (
    <div className="flex items-center justify-center bg-mainBg w-screen h-screen">
      <div className={`relative flex flex-col items-center justify-start w-full h-full max-w-[39rem]`}>
        <div className={`flex flex-col items-center justify-start h-full w-full overflow-hidden overflow-y-auto invisible-scrollbar ${className}`}>
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        {withMenu && (
          <BottomMenu />
        )}
      </div>
    </div>
  );
};
