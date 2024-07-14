import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import ConnectWalletEthers from "./components/ConnectWalletEthers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
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
                element: <ConnectWalletEthers />
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