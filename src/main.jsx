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
import AllArtAndCraft from './pages/AllArtAndCraft/AllArtAndCraft';
import MyArtAndCraft from './pages/MyArtAndCraft/MyArtAndCraft';
import ViewDetail from './components/ViewDetail/ViewDetail';
import Update from './components/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/logIn', element: <Login></Login> },
      { path: '/signUp', element: <SignUp></SignUp> },
      { path: '/addArt', element: <PrivateRoutes><AddArtAndCraft></AddArtAndCraft></PrivateRoutes> },
      {
        path: '/allArt', element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch('http://localhost:5000/arts')
      },
      {
        path: '/myArt', element: <PrivateRoutes><MyArtAndCraft></MyArtAndCraft></PrivateRoutes>
      },
      {
        path: '/details/:id',
        element: <PrivateRoutes><ViewDetail></ViewDetail></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/arts/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/arts/${params.id}`)
      }
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
