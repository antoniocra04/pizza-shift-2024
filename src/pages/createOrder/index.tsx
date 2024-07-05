import { OrderForm } from "@components/orderForm"
import { PageLayout } from "@components/pageLayout"
import { PageTitle } from "@components/pageTitle"

export const CreateOrderPage = () => {
    return(
        <PageLayout>
            <PageTitle title="Введите ваши данные"/>
            <OrderForm/>
        </PageLayout>
    )
}