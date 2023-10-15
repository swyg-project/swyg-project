import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/constants";

import GlobalStyles from "./style/global";
import theme from "./style/theme";

import Home from "./pages/Home";
import Test from "./pages/GiftTypeTest";
import GiftTypeResult from "./pages/GiftTypeResult";
import GiftReceived from "./pages/GiftReceived";
import Redirect from "./pages/Redirect";
import GiftLast from "./pages/GiftLast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  { path: "/result/:id", element: <GiftTypeResult /> },
  { path: "/short/:id", element: <Redirect /> },
  { path: "/receiver", element: <GiftReceived /> },
  { path: "/last", element: <GiftLast /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
