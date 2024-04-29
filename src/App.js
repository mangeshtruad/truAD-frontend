import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SideBar from './Components/SideBar';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
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
    }
  ])
  return (
    // <RouterProvider router={router}></RouterProvider>
    <HomePage />
  )
}

export default App;