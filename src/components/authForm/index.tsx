import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateOtpMutation } from '@api/__generated__/graphql';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

import styles from './style.module.scss';

interface AuthFormInputs {
  phone: string;
}

interface AuthFormProps {
  onSubmit: SubmitHandler<AuthFormInputs>;
}

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthFormInputs>();
  const [createOtp, { data }] = useCreateOtpMutation();

  const handleCreateOtp = () => {
    if (!errors.phone) {
      createOtp({ variables: { phone: watch('phone') } });
    }
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
      {data ? <Button>Войти</Button> : <Button onClick={handleCreateOtp}>Продолжить</Button>}
    </form>
  );
};
