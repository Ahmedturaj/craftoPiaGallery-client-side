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
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import AddArtAndCraft from './pages/AddArtAndCraf/AddArtAndCraft';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:'/',element:<Home></Home>},
      {path:'/logIn',element:<Login></Login>},
      {path:'/signUp',element:<SignUp></SignUp>},
      {path:'/addArt',element:<PrivateRoutes><AddArtAndCraft></AddArtAndCraft></PrivateRoutes>}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
