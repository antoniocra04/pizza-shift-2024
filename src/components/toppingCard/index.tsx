import { useState } from 'react';
import classnames from 'classnames'
import { Ingredient } from '@api/__generated__/graphql';

import styles from './style.module.scss'

interface ToppingCardProps{
    img: string;
    name: Ingredient;
    price: number;
    onClick: (name: Ingredient, price: number) => void;
}

export const ToppingCard: React.FC<ToppingCardProps> = ({img, name, price, onClick}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelect = () => {
        onClick(name, price);
        setIsSelected(!isSelected);
    }

    return(
        <div className={classnames(styles.topping_card, isSelected ? styles.__active : '')} onClick={handleSelect}>
            <div>
                <img width={100} src={img} alt="" />
                <p className={styles.topping_text}>{name}</p>
            </div>
            <p className={styles.topping_price}>{price}₽</p>
        </div>
    )
}