import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const dividerStyles = cva('w-full my-4 p-4 bg-white shadow-sm border border-b-[0.5px] border-gray-200 rounded-md');

interface DividerProps {
  children?: ReactNode;
  onClick?: () => void;
}

const Divider: React.FC<DividerProps> = ({ children, title }) => {
  return (
    <div className={`${dividerStyles()}`}>
      {children}
    </div>
  );
};

export default Divider;
