import type { ComponentProps } from 'react';
import React from 'react';
import { clsx } from 'clsx';

import styles from './style.module.scss';

interface InputProps extends ComponentProps<'input'> {
  error: boolean;
}

export const Input = React.forwardRef(
  ({ error, ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        type='text'
        className={clsx(styles.input, { [styles.error]: error })}
        {...props}
        ref={ref}
      />
    );
  }
) as (props: InputProps & { ref?: React.ForwardedRef<HTMLInputElement> }) => React.ReactElement;
