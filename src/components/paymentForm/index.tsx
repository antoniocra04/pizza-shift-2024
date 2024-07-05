import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { useHookFormMask } from 'use-mask-input';
import styles from './style.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";

export type PaymentFormInputs = {
    number: string;
    date: string;
    cvv: string;
}

interface PaymentFormProps{
    onSubmit: SubmitHandler<PaymentFormInputs>
}

export const PaymentForm = ({onSubmit}: PaymentFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>();
    const registerWithMask = useHookFormMask(register)


    return(
        <form onSubmit={handleSubmit(onSubmit)} className={styles.payemnt_form}>
            <div className={styles.payment_form__container}>
                <div className={styles.payment_form__number_container}>
                    <div className={styles.payemnt_form__item}>
                        <label htmlFor="">Номер</label>
                        <Input error={!!errors.number} register={registerWithMask('number', ['9999 9999'], {required: true, pattern: /^\d{4} \d{4}$/})} placeholder="0000 0000"/>
                    </div>
                </div>
                <div className={styles.payment_form__other_container}>
                    <div className={styles.payemnt_form__item}>
                        <label htmlFor="">Срок</label>
                        <Input error={!!errors.date} register={registerWithMask('date', ['99/99'], {required: true, pattern: /^\d{2}\/\d{2}$/})} placeholder="00/00"/>

                    </div>
                    <div className={styles.payemnt_form__item}>
                        <label htmlFor="">CVV</label>
                        <Input error={!!errors.cvv} register={register('cvv', {required: true})} placeholder="000"/>
                    </div>
                </div>
            </div>
            <Button type="submit">Оплатить</Button>
        </form>

    )
}