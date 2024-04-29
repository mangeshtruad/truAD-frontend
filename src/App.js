import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import DashBoardContainer from "./Page"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      element: <DashBoardContainer />
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>

  )
}

export default App;