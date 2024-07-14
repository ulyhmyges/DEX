// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import App from "./components/App";
import Swap from "./components/Swap";
import ConnectWallet from "./components/ConnectWallet";
import Tokens from "./components/Tokens";
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
                element: <App/>
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

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
