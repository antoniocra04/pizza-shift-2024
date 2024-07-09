import { useNavigate, useParams } from 'react-router-dom';
import { useCancelOrderMutation, useGetPizzaOrderQuery } from '@api/__generated__/graphql';
import { PageLayout } from '@components/pageLayout';
import { Button } from '@ui/button';
import { PizzaStatus } from '@utils/PizzaStatus';

import styles from './style.module.scss';

export const OrderPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetPizzaOrderQuery({
    variables: { orderId: orderId || '' },
    fetchPolicy: 'cache-and-network'
  });
  const [cancelOrder] = useCancelOrderMutation();

  const handleCancelOrder = () => {
    cancelOrder({ variables: { orderId: orderId || '' } });
    navigate('/orders');
  };

  return (
    <PageLayout>
      {data && (
        <div className={styles.order_card}>
          <div className={styles.order_card__item}>
            <p>Статус</p>
            <p>Заказ {PizzaStatus[data?.getPizzaOrder.order.status]}</p>
          </div>
          <div className={styles.order_card__item}>
            <p>Адрес доставки</p>
            <p>{`${data.getPizzaOrder.order.receiverAddress.street}, ${data.getPizzaOrder.order.receiverAddress.street}, ${data.getPizzaOrder.order.receiverAddress.house}`}</p>
          </div>
          <div className={styles.order_card__item}>
            <p>Состав заказа</p>
            <p>На бек не завезли</p>
          </div>
          <div className={styles.order_card__item}>
            <p>Сумма заказа</p>
            <p>На бек не завезли</p>
          </div>
          {data.getPizzaOrder.order.cancellable && (
            <Button onClick={handleCancelOrder}>Отменить заказ</Button>
          )}
        </div>
      )}
    </PageLayout>
  );
};
