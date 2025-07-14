'use client';

import { cva } from 'class-variance-authority';
import React from 'react';
import { ButtonProps } from '@/types/components';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';

const buttonStyles = cva('rounded-md transition-colors w-full', {
  variants: {
    variant: {
      default: 'bg-primary-500 py-3',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export default function CommonButton({
  children,
  variant = 'default',
  classNames,
  href,
  onClick,
  ...htmlProps
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(buttonStyles({ variant }), classNames)}
      {...htmlProps}
    >
      {children}
    </button>
  );
}
