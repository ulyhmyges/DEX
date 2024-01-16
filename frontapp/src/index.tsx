import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import App from "./App";
import Swap from "./Swap";
import ConnectWallet from "./ConnectWallet";


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
                path: "tockens",
                element: <h1>Tockens</h1>
            },
            {
                path: "pools",
                element: <h1>Pools</h1>
            },
            {
                path: "connect",
                element: <ConnectWallet />
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
