import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { type User, useUpdateProfileMutation } from '@api/__generated__/graphql';
import { Button } from '@ui/button';
import { Input } from '@ui/input';

import styles from './style.module.scss';

type ProfileFormInputs = {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
  email: string;
  city: string;
};

interface ProfileFormProps {
  user: User;
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const [updateProfile] = useUpdateProfileMutation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormInputs>({
    defaultValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      middlename: user.middlename,
      phone: user.phone,
      email: user.email,
      city: user.city
    }
  });

  const onSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    updateProfile({
      variables: {
        phone: data.phone,
        profile: {
          lastname: data.lastname,
          firstname: data.firstname,
          middlename: data.middlename,
          email: data.email,
          city: data.city
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.profile_form}>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Фамилия
        </label>
        <Input {...register('firstname', { required: true })} error={!!errors.firstname} />
      </div>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Имя
        </label>
        <Input {...register('lastname', { required: true })} error={!!errors.lastname} />
      </div>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Отчество
        </label>
        <Input {...register('middlename', { required: true })} error={!!errors.middlename} />
      </div>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Телефон
        </label>
        <Input disabled {...register('phone', { required: true })} error={!!errors.phone} />
      </div>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Email
        </label>
        <Input
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          error={!!errors.email}
        />
      </div>
      <div className={styles.profile_form__item}>
        <label className={styles.profile_form__label} htmlFor=''>
          Адрес
        </label>
        <Input {...register('city', { required: true })} error={!!errors.city} />
      </div>
      <Button type='submit'>Обновить данные</Button>
    </form>
  );
};
