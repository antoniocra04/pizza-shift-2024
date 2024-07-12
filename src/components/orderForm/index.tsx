import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '@store/baseHooks';
import { addInfo } from '@store/orderInfo/orderInfoSlice';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

import styles from './style.module.scss';

type Inputs = {
  surname: string;
  name: string;
  phone: string;
  email: string;
  address: string;
};

export const OrderForm = () => {
  const { orderInfo } = useSelector((state) => state);
  const orderInfoDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      surname: orderInfo.surname,
      name: orderInfo.name,
      phone: orderInfo.phone,
      email: orderInfo.email,
      address: `${orderInfo.address.street} ${orderInfo.address.house} ${orderInfo.address.apartment}`
    }
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = ({ name, surname, phone, email, address }) => {
    const addressComponents = address.split(',');
    orderInfoDispatch(
      addInfo({
        name,
        surname,
        phone,
        email,
        address: {
          street: addressComponents[0],
          apartment: addressComponents[2],
          house: addressComponents[1]
        }
      })
    );
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.order_form}>
      <div className={styles.order_form__item}>
        <label className={styles.order_form__label}>Фамилия</label>
        <Input
          error={!!errors.surname}
          {...register('surname', { required: true })}
          placeholder='Фамилия'
        />
      </div>
      <div className={styles.order_form__item}>
        <label className={styles.order_form__label}>Имя</label>
        <Input error={!!errors.name} {...register('name', { required: true })} placeholder='Имя' />
      </div>
      <div className={styles.order_form__item}>
        <label className={styles.order_form__label}>Номер телефона</label>
        <Input
          error={!!errors.phone}
          {...register('phone', { required: true, pattern: /^\d{11}$/g })}
          placeholder='Телефон'
        />
      </div>
      <div className={styles.order_form__item}>
        <label className={styles.order_form__label}>Email</label>
        <Input
          error={!!errors.email}
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          placeholder='Email'
        />
      </div>
      <div className={styles.order_form__item}>
        <label className={styles.order_form__label}>Адрес</label>
        <Input
          error={!!errors.address}
          {...register('address', { required: true })}
          placeholder='Адрес'
        />
      </div>
      <div className={styles.order_form__buttons}>
        <Button onClick={() => navigate('/cart')} variant='outlined'>
          Назад
        </Button>
        <Button type='submit'>Продолжить</Button>
      </div>
    </form>
  );
};
