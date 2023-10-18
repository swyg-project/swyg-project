import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./style/global";
import theme from "./style/theme";
import { store } from "./redux/app/store";

import App from "./App";
import Home from "./pages/Home";
import GiftListCreate from "./pages/GiftListCreate";
import Cart from "./pages/Cart";
import Letter from "./pages/Letter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/list",
                children: [
                    {
                        index: true,
                        element: <GiftListCreate />,
                    },
                    {
                        path: ":category",
                        element: <GiftListCreate />,
                    },
                ],
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/letter",
                element: <Letter />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    </Provider>
);
