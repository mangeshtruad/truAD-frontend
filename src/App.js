import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DashBoardContainer from "./Page";
import Resource from "./Components/Resource Management";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

          path: "/dashboard/",
          element: <Resource />,
        },
     
        {
          path: "/dashboard",
          element: <HomePage />,
        },
      ],
    },
   
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  
  );
}

export default App;
