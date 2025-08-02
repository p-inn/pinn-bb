import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { CommonModalProps } from '@/types/components';

const modalContentStyles = cva(
  'bg-white rounded-lg shadow-lg border-t-4 w-[90vw] max-w-[650px] m-auto border-mainColor-500 max-w-md w-full p-6 transition-transform duration-300 transform',
  {
    variants: {
      isVisible: {
        true: 'translate-y-0',
        false: 'scale-95',
      },
    },
  },
);

export default function CommonModal({
  isOpen,
  onClose,
  children,
  className,
}: CommonModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/40 z-50 flex justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className,
      )}
    >
      <div className={modalContentStyles({ isVisible: isAnimating })}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕ {/* 닫기 버튼 */}
        </button>
        {children}
      </div>
    </div>
  );
}
