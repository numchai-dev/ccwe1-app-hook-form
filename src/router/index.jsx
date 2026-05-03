import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: async () => {
          const response = await fetch('https://dummyjson.com/products');
          const data = await response.json();
          return data.products;
        },
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const response = await fetch(`https://dummyjson.com/product/${params.id}`)
          const data = await response.json();
          return data;
        },
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default router;
