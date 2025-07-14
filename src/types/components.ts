import { ReactNode } from "react";

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  type?: ButtonType;
  href?: string;
  onClick?: () => void;
  classNames?: string;
  variant?: 'default';
}