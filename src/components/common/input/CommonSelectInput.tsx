import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { CommonSelectProps } from '@/types/components';

const CommonSelectStyle = cva(
  'p-3 rounded-md w-full focus:outline-none bg-white border border-solid border-border-300', {
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

export default function CommonSelect({
  classNames,
  children,
  ...htmlProps
}: CommonSelectProps) {
  return (
    <select className={cn(CommonSelectStyle(), classNames)} {...htmlProps}>
      {children}
    </select>
  );
}
