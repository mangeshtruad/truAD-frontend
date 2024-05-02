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
import RaiseTicket from "./Components/RaiseTicket";
import TablePaginationDemo from "./Components/RaiseTicket/Pagination";

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
      path: "/page",
      element: <TablePaginationDemo />,
    },
    {
      path: "/dashboard",
      element: <DashBoardContainer />,
      children: [
        {
          path: "/dashboard/resource",
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
        {
          path: "/dashboard/raise",
          element: <RaiseTicket />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
