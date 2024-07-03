
import { CartList } from "@components/cartList"
import { CartTotalLabel } from "@components/cartTotalLabel"
import { PageLayout } from "@components/pageLayout"

export const CartPage = () => {
    return(
        <PageLayout>
            <CartList/>
            <CartTotalLabel/>
        </PageLayout>
    )
}