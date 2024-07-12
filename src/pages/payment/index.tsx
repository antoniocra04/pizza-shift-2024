import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Dough, useCreateOrderMutation } from '@api/__generated__/graphql';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import type { PaymentFormInputs } from '@components/paymentForm';
import { PaymentForm } from '@components/paymentForm';
import { PaymentSuccsessModal } from '@components/paymentSuccsessModal';
import { useDispatch, useSelector } from '@store/baseHooks';
import { clearCart } from '@store/cart/cartSlice';

export const PaymentPage = () => {
  const [createOrder, { data }] = useCreateOrderMutation();
  const [isModalActive, setIsModalActive] = useState(false);
  const showModal = isModalActive && data;
  const orderInfo = useSelector((state) => state.orderInfo);
  const cart = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();
  const order = cart.products.map((product) => `${product.name} `).toString();

  const handleClose = () => {
    cartDispatch(clearCart());
    setIsModalActive(false);
  };

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    const { number, cvv, date } = data;
    createOrder({
      variables: {
        number: {
          pan: number,
          cvv,
          expireDate: date
        },
        person: {
          firstname: orderInfo.name,
          lastname: orderInfo.surname,
          phone: orderInfo.phone,
          middlename: ''
        },
        pizzas: cart.products.map((product) => ({
          description: '',
          doughs: {
            name: Dough.Thin,
            price: 0
          },
          id: '1',
          name: product.name,
          size: product.sizes.map((size) => ({ name: size.name, price: size.price })),
          toppings: product.selectedToppings
        })),
        address: {
          ...orderInfo.address,
          comment: ''
        }
      }
    }).then(() => {
      setIsModalActive(true);
    });
  };

  return (
    <PageLayout>
      <PageTitle title='Введите данные карты для оплаты' />
      <PaymentForm onSubmit={onSubmit} />
      {showModal && (
        <PaymentSuccsessModal
          order={order}
          price={cart.cartTotalPrice}
          address={`${orderInfo.address.street}, ${orderInfo.address.house}, ${orderInfo.address.apartment}`}
          onClose={handleClose}
        />
      )}
    </PageLayout>
  );
};
