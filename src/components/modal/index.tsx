import styles from './style.module.scss'

interface ModalProps {
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
	return (
		<div className={styles.modal_bg}>
			<div className={styles.modal}>{children}</div>
		</div>
	);
};