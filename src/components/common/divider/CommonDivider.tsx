import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

const dividerStyles = cva('w-full p-4 bg-white shadow-sm border border-b-[0.5px] border-gray-200 rounded-md');

interface DividerProps {
  children?: ReactNode;
  title: string;
  onClick?: () => void;
  classNames?: string;
}

const Divider: React.FC<DividerProps> = ({ children, title, classNames }) => {
  return (
    <div className={`${dividerStyles()} ${classNames}`}>
      <p className='font-semibold text-base sm:text-xl mb-6'>{title}</p>
      {children}
    </div>
  );
};

export default Divider;
