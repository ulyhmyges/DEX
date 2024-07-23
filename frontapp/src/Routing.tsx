import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Swap from "./components/Swap";
import Coins from "./components/Coins";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import ConnectWalletEthers from "./components/ConnectWalletEthers";
import ConnectWallet from "./components/ConnectWallet";
import Tokens from "./components/Tokens";


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
                path: "coins",
                element: <Coins/>
            },
            {
                path: "pools",
                element: <h1>Pools</h1>
            },
            {
                path: "tokens",
                element: <Tokens />
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