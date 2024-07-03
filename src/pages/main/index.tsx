import { PageLayout } from "@components/pageLayout"
import { PizzaCatalog } from "@components/pizzaCatalog"

export const MainPage: React.FC = () => {
    return(
        <PageLayout>
            <PizzaCatalog/>
        </PageLayout>
    )
}