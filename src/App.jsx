import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Ero from "./Pages/Ero";
import Layout from "./Components/Layout";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Ero />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:cat",
        element: <Shop />,
      },
      {
        path: "/:cat/:id",
        element: <Product />,
      },
      {
        path: "/dang-nhap",
        element: <Login />,
      },
      {
        path: "/gio-hang",
        element: <Cart />,
      },
      {
        path: "/thanh-toan",
        element: <Checkout />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      
      
    </>
  );
}

export default App;
