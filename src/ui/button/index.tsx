import type { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames'
import styles from './style.module.scss';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  outline?: boolean
}

export const Button = (props: ButtonProps) => {
  const buttonStyles = classNames(styles.button, props.outline && styles.__outline)
  return (
    <button {...props} className={buttonStyles}>
      {props.children}
    </button>
  );
};
