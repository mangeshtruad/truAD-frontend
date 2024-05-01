import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SideBar from './Components/SideBar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import DashBoardContainer from "./Page"
import Analytics from './Components/Analytics/Analytics';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MaterialLibrary from './Components/MaterialManagement/MaterialLibrary';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
  
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/dashboard",
      element: <DashBoardContainer />,
      children: [
        {
        path: "/dashboard",
        element: <HomePage />
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />
      },
      {
        path: "/dashboard/material",
        element: <MaterialLibrary />
      }
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
    // <DashBoardContainer />
  )
}

export default App;