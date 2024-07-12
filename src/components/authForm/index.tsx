import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateOtpMutation, useSignInMutation } from '@api/__generated__/graphql';
import { useTimer } from '@hooks/useTimer';
import { useDispatch } from '@store/baseHooks';
import { addInfo } from '@store/orderInfo/orderInfoSlice';
import { setToken } from '@store/user/userSlice';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

import styles from './style.module.scss';

type AuthFormInputs = {
  phone: string;
  code: string;
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthFormInputs>();
  const [createOtp, { data }] = useCreateOtpMutation();
  const [signIn, signInInfo] = useSignInMutation();
  const [timer, setTimer] = useTimer(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateOtp = () => {
    if (!errors.phone && timer === 0) {
      createOtp({ variables: { phone: watch('phone') } });
      setTimer(120);
    }
  };

  const onSubmit: SubmitHandler<AuthFormInputs> = (data) => {
    signIn({
      variables: {
        phone: data.phone,
        code: parseInt(data.code, 10)
      }
    }).then((res) => {
      if (res.data) {
        dispatch(setToken(res.data.signin.token));
        dispatch(
          addInfo({
            email: res.data.signin.user.email || '',
            phone: res.data.signin.user.phone,
            name: res.data.signin.user.firstname || '',
            surname: res.data.signin.user.lastname || '',
            address: {
              apartment: '',
              street: '',
              house: ''
            }
          })
        );
        navigate('/');
      }
    });
  };

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.auth_form__item}>
        <label htmlFor='phone' className={styles.auth_form__label}>
          Введите номер телефона для входа в личный кабинет
        </label>
        <Input
          error={!!errors.phone}
          {...register('phone', { required: true, pattern: /^\d{11}$/g })}
          placeholder='Телефон'
        />
      </div>
      {data ? (
        <>
          <Input
            error={!!errors.code}
            {...register('code', { required: true, pattern: /^[0-9]*$/g })}
            placeholder='Код'
          />
          {signInInfo.error ? <p className='auth__input-error'>Неверный код</p> : ''}
          <Button type='submit'>Войти</Button>
          <button type='button' onClick={handleCreateOtp} className={styles.auth_form__resend_code}>
            Запросить код {timer > 0 ? `повторно можно через ${timer} секунд` : ''}{' '}
          </button>
        </>
      ) : (
        <Button onClick={handleCreateOtp}>Продолжить</Button>
      )}
    </form>
  );
};
