import { Button } from '@ui/button';

import styles from './style.module.scss';

interface PizzaCardProps {
    title: string;
    subtitle: string;
    price: number;
    img: string;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({title, subtitle, price, img}) => {
    return(
        <div className={styles.pizza_card}>
            <img width={220} src={`https://shift-backend.onrender.com${img}`} alt="" />
            <div className={styles.pizza_info}>
                <div>
                    <h2 className={styles.pizza_title}>{title}</h2>
                    <p className={styles.pizza_subtitle}>{subtitle}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <p className={styles.pizza_price}>{price}</p>
                    <Button>Выбрать</Button>
                </div>  
            </div>
        </div>
    )
}