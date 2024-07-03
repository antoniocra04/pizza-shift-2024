import type { ComponentPropsWithoutRef } from 'react';
import styles from './style.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
};
