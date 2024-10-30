import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomeLayout from "./Components/Home/HomeLayout.jsx";
import ErrorPage from "./Components/Common/ErrorPage.jsx";
import NavResponsive from "./Components/Context/ResponsiveContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomeLayout /> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavResponsive>
      <RouterProvider router={router} />
    </NavResponsive>
  </React.StrictMode>
);
