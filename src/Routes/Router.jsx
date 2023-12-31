import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Payment_Success from "../Page/Payment/Payment_Success";
import Payment_Cancel from "../Page/Payment/Payment_Cancel";
import Payment from "../Page/Payment/Payment";
import Home from "../Page/Home/Home";
import ProductDetails from "../Page/Products/ProductDetails";
import ShoppingCart from "../Page/ShoppingCart/ShoppingCart";
import CheckOut from "../Page/ShoppingCart/CheckOut";
import Login from "../Page/Auth/Login";
import SignUp from "../Page/Auth/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: < Home/>
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/ShoppingCart",
                element: <ShoppingCart />
            },
            {
                path: "/Checkout",
                element: <CheckOut />
            },
            {
                path: '/payment-success',
                element: <Payment_Success />
            },
            {
                path: '/payment-cancel',
                element: <Payment_Cancel />
            },
        ]
    }
])

export default router