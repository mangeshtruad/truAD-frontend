import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DashBoardContainer from "./Page";
import Resource from "./Components/Resource Management";
import PopularPicks from "./Components/PopularPicks/";
import PlacePromotions from "./Components/PlacePromotions";
import Invoices from "./Components/Invoices";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./Components/Analytics/Analytics";
import MaterialLibrary from "./Components/MaterialManagement/MaterialLibrary";
import RaiseTicket from "./Components/RaiseTicket";
import Btn from "./Components/MaterialManagement/DeleteDialog";
import ActionPage from "./Components/ActionPage/ActionPage";
import { MyContextProvider } from "./MyContext";
import VerifyOTP from "./Components/VerifyOTP/VerifyOTP";

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
      path: "/verifyOTP",
      element: <VerifyOTP />,
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
          path: "/dashboard/raiseticket",
          element: <RaiseTicket />,
        },
        {
          path: "/dashboard/popularpicks",
          element: <PopularPicks />,
        },
        {
          path: "/dashboard/invoices",
          element: <Invoices />,
        },
        {
          path: "/dashboard/placepromotion",
          element: <PlacePromotions />,
        },
        {
          path: "/dashboard/actionpage",
          element: <ActionPage />,
        },
      ],
    },
  ]);

  return     <MyContextProvider>
  <RouterProvider router={router}></RouterProvider>
</MyContextProvider>
}

export default App;
