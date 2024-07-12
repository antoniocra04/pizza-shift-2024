import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useDispatch, useSelector } from '@store/baseHooks';
import { setToken } from '@store/user/userSlice';

import { AuthPage } from './pages/auth';
import { CartPage } from './pages/cart';
import { CreateOrderPage } from './pages/createOrder';
import { MainPage } from './pages/main';
import { OrderPage } from './pages/order';
import { OrdersPage } from './pages/orders';
import { PaymentPage } from './pages/payment';
import { ProfilePage } from './pages/profile';

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
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);

export const App = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const client = new ApolloClient({
    uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(setToken(token));
    }
  });

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};
