import type { ComponentProps } from 'react';
import styles from './style.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form';
import classNames from 'classnames'

interface InputProps extends ComponentProps<'input'> {
	register: UseFormRegisterReturn
	error: boolean
}

export const Input: React.FC<InputProps> = (props) => {
	const inputStyles = classNames(styles.input, props.error && styles.__error)
	return <input type="text" {...props.register} className={inputStyles} {...props} />;
};