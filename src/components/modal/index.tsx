import { CrossIcon } from '@icons/CrossIcon';

import styles from './style.module.scss';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => (
  <div className={styles.modal_bg}>
    <div className={styles.modal__cross}>
      <button type='button' onClick={onClose}>
        <CrossIcon />
      </button>
    </div>
    <div className={styles.modal}>{children}</div>
  </div>
);
