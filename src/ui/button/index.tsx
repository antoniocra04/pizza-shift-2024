import type { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

import styles from './style.module.scss';

type ButtonVariant = 'primary' | 'outlined';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => (
  <button className={clsx(styles.button, styles[variant], className)} type='button' {...props}>
    {children}
  </button>
);
