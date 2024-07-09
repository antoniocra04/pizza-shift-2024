import { useGetPizzaOrdersQuery } from '@api/__generated__/graphql';
import { OrderCard } from '@components/orderCard';
import { PageLayout } from '@components/pageLayout';

import styles from './style.module.scss';

export const OrdersPage = () => {
  const { data } = useGetPizzaOrdersQuery({ fetchPolicy: 'cache-and-network' });
  return (
    <PageLayout>
      <div className={styles.orders_columns_info}>
        <p>Статус</p>
        <p>Адрес доставки</p>
        <p>Состав заказа</p>
      </div>
      <div className={styles.orders_list}>
        {data?.getPizzaOrders.orders.map(({ status, receiverAddress, _id }) => (
          <OrderCard
            id={_id}
            status={status}
            address={`${receiverAddress.street}, ${receiverAddress.street}, ${receiverAddress.house}`}
            products='asdfasfasdfs'
          />
        ))}
      </div>
    </PageLayout>
  );
};
