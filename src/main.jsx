import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./style/global";
import theme from "./style/theme";

import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
