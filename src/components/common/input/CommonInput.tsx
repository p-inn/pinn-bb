import { cva } from 'class-variance-authority';
import { CommonInputProps } from '@/types/components';
import { cn } from '@/utils/cn';

const CommonInputStyle = cva('pl-3 py-3 rounded-md w-full focus:outline-none  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-3 sm:space-y-4 lg:space-y-5 mb-6', {
  variants: {
    variant: {
      default: 'bg-white border border-solid border-border-300',
      disabled:
        'bg-white border border-solid border-border-300 cursor-not-allowed',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export default function CommonInput({
  type = 'text',
  variant,
  classNames,
  ...htmlProps
}: CommonInputProps) {
  return (
    <input
      type={type}
      className={cn(CommonInputStyle({ variant }), classNames)}
      {...htmlProps}
    />
  );
}
