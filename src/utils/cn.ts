import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 외부 주입 className 을 오버라이딩하기 위해 사용
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
