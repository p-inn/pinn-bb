import { cva } from 'class-variance-authority';
import { CommonInputProps } from '@/types/components';
import { cn } from '@/utils/cn';

const CommonInputStyle = cva('p-3 rounded-md w-full focus:outline-none', {
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
