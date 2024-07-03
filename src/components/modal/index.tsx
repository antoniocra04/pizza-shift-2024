import styles from './style.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modal_bg}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
