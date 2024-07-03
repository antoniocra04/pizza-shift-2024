import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/main';
import { CartPage } from './pages/cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
