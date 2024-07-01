import { Header } from "@components/header"

import styles from "./style.module.scss"

interface PageLayoutProps {
	children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}