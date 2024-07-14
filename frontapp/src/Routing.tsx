import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import ConnectWallet from "./components/ConnectWallet";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "swap",
                element: <Swap/>
            },
            {
                path: "tokens",
                element: <Tokens/>
            },
            {
                path: "pools",
                element: <h1>Pools</h1>
            },
            {
                path: "connect",
                element: <ConnectWallet />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
        ]
    }
]);

export default function Routing(){
    return <RouterProvider router={router} />
}