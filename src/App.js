import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DashBoardContainer from "./Page";
import Resource from "./Components/Resource Management";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dialog from "./Components/Resource Management/Dialog";

import Analytics from "./Components/Analytics/Analytics";

import MaterialLibrary from "./Components/MaterialManagement/MaterialLibrary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <DashBoardContainer />,
      children: [
        {
          path: "/dashboard/res",
          element: <Resource />,
        },

        {
          path: "/dashboard",
          element: <HomePage />,
        },

        {
          path: "/dashboard/analytics",
          element: <Analytics />,
        },
        {
          path: "/dashboard/material",
          element: <MaterialLibrary />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
