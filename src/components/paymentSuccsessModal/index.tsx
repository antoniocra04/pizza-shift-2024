import { Link } from 'react-router-dom';
import { SuccsessIcon } from '@icons/SuccsessIcon';
import { Modal } from '@ui/modal';

import styles from './style.module.scss';

interface PaymentSuccsessModalProps {
  order: string;
  address: string;
  price: number;
  onClose: () => void;
}

export const PaymentSuccsessModal = ({
  order,
  address,
  price,
  onClose
}: PaymentSuccsessModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.succsess_modal__header}>
        <SuccsessIcon />
        <h2>Оплата прошла успешно</h2>
      </div>
      <div className={styles.succsess_modal__info}>
        <div className={styles.succsess_modal__info_item}>
          <p>Заказ</p>
          <p>{order}</p>
        </div>
        <div className={styles.succsess_modal__info_item}>
          <p>Адрес доставки</p>
          <p>{address}</p>
        </div>
        <div className={styles.succsess_modal__info_item}>
          <p>Сумма заказа</p>
          <p>{price}₽</p>
        </div>
        <p className={styles.succsess_modal__subtitle}>Вся информация была продублирована в SMS</p>
      </div>
      <div className={styles.succsess_modal__button}>
        <Link to='/'>Перейти в главное меню</Link>
      </div>
    </Modal>
  );
};
