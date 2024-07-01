import { Link } from 'react-router-dom'

import { UserIcon } from '@icons/UserIcon'
import { TimeIcon } from '@icons/TimeIcon'
import { CartIcon } from '@icons/CartIcon'
import { ExitIcon } from '@icons/ExitIcon'

import styles from './style.module.scss'


export const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img src="./logo.svg" alt="" />
                <nav className={styles.header_nav}>
                    <ul className={styles.header_nav__list}>
                        <li className={styles.header_nav__list_item}><Link to="#"><UserIcon/>Профиль</Link></li>
                        <li className={styles.header_nav__list_item}><Link to="#"><TimeIcon/>Заказы</Link></li>
                    </ul>
                    <ul className={styles.header_nav__list}>
                        <li className={styles.header_nav__list_item}><Link to="#"><CartIcon/>Корзина</Link></li>
                        <li className={styles.header_nav__list_item}><Link to="#"><ExitIcon/>Выйти</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}