import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { MainLayout } from "../components/layout/MainLayout";
import User from "../pages/user_managment/User";
import UserInfoForm from "../pages/user_managment/UserInfoForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <User />,
          },
          {
            path: "/user/:id",
            element: <UserInfoForm />,
          },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
