import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CartPage } from './pages/cart';
import { CreateOrderPage } from './pages/createOrder';
import { PaymentPage } from './pages/payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/createOrder',
    element: <CreateOrderPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
