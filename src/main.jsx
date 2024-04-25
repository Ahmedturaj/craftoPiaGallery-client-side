import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Authenticate/LogIn/Login';
import SignUp from './pages/Authenticate/SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:'/',element:<Home></Home>},
      {path:'/logIn',element:<Login></Login>},
      {path:'/signUp',element:<SignUp></SignUp>}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
