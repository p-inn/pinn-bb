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

export type InputType = 'text' | 'password' | 'email' | 'date' | 'number' | 'tel' | 'name' | 'passwordCheck';
export interface CommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  variant?: 'default' | 'disabled';
  classNames?: string;
  label?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData extends SignInData {
  name?: string;
  passwordCheck?: string;
  nickName?: string;
  tel?: string;
}

export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}