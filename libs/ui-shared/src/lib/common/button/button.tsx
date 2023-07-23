import {
  SIZE_MAPS,
  Size,
  VARIANT_MAPS,
  Variant,
} from '@tech-glimpse-front/types';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const fixedBtnClass =
  'items-center px-5 py-2.5 rounded-lg font-medium leading-none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  variant: Variant;
  children: ReactNode;
  onClick?: () => void;
}

export function Button({
  size,
  variant,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={twMerge(
        fixedBtnClass,
        `${VARIANT_MAPS[variant]} ${SIZE_MAPS[size]}`
      )}
    >
      {children}
    </button>
  );
}

export default Button;
