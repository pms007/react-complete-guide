import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/products';
import RootLayout from './pages/root';
import ErrorPage from './pages/error';
import ProductDetailsPage from './pages/productDetails';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'products', element: <ProductPage />},
      {path: 'products/:id', element: <ProductDetailsPage />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
