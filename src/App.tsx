import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <></>,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
