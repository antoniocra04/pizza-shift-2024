import styles from './style.module.scss'

interface PageHeaderProps {
    title: string
}

export const PageTitle = ({title}: PageHeaderProps) => (
    <h2 className={styles.page_title}>{title}</h2>
)