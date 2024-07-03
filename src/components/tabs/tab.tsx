import classNames from 'classnames';
import styles from './style.module.scss';

interface TabProps {
    onClick: () => void;
    title: string;
    isActive: boolean;
}

export const Tab = ({onClick, title, isActive}: TabProps) => {
    const tabStyles = classNames(styles.tab, isActive ? styles.__active : '')
    return(
        <button
            key={title}
            onClick={onClick}
            className={tabStyles}
        >
            {title}
        </button>
    )
}