import { Link } from 'react-router-dom';
import type { PizzaStatus } from '@api/__generated__/graphql';
import { PizzaStatus as PizzaStatusConvert } from '@utils/PizzaStatus';
import clsx from 'clsx';

import styles from './style.module.scss';

interface OrderCardProps {
  id: string;
  address: string;
  products: string;
  status: PizzaStatus;
}

export const OrderCard = ({ status, address, products, id }: OrderCardProps) => (
  <div className={styles.order_card}>
    <div className={clsx(styles.orders__status_round, styles[status])} />
    <p>Заказ {PizzaStatusConvert[status]}</p>
    <p>{address}</p>
    <p>{products}</p>
    <Link to={`/order/${id}`} className={styles.order_card__button} type='button'>
      Подробнее
    </Link>
  </div>
);
