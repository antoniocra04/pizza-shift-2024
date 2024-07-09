import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useSelector } from '@store/baseHooks';

import { AuthPage } from './pages/auth';
import { CartPage } from './pages/cart';
import { CreateOrderPage } from './pages/createOrder';
import { MainPage } from './pages/main';
import { OrderPage } from './pages/order';
import { OrdersPage } from './pages/orders';
import { PaymentPage } from './pages/payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/createOrder',
    element: <CreateOrderPage />
  },
  {
    path: '/payment',
    element: <PaymentPage />
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/orders',
    element: <OrdersPage />
  },
  {
    path: '/order/:orderId',
    element: <OrderPage />
  }
]);

export const App = () => {
  const token = useSelector((state) => state.user.token);
  const client = new ApolloClient({
    uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
