import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthPage } from './pages/auth';
import { CartPage } from './pages/cart';
import { CreateOrderPage } from './pages/createOrder';
import { MainPage } from './pages/main';
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
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
