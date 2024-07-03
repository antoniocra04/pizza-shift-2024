import { Button } from '@ui/button';

import styles from './style.module.scss';

interface PizzaCardProps {
    title: string;
    subtitle: string;
    price: number;
    img: string;
    onClick: () => void;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({title, subtitle, price, img, onClick}) => {
    return(
        <div className={styles.pizza_card}>
            <img width={220} src={`${import.meta.env.VITE_BACKEND_URL}${img}`} alt="" />
            <div className={styles.pizza_info}>
                <div>
                    <h3 className={styles.pizza_title}>{title}</h3>
                    <p className={styles.pizza_subtitle}>{subtitle}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <p className={styles.pizza_price}>{price}₽</p>
                    <Button onClick={onClick}>Выбрать</Button>
                </div>  
            </div>
        </div>
    )
}