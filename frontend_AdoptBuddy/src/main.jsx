import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root/Root';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import HomePage from './routes/HomePage/HomePage';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import AdminProfile from './routes/AdminProfile/AdminProfile';
import AllPets from './routes/AllPets/AllPets';
import PetDetails from './routes/PetDetails/PetDetails';
import UserProfile from './routes/UserProfile/UserProfile';
import Contact from './routes/Contact/Contact';
import FavouriteList from './routes/FavouriteList/FavouriteList';
import About from './routes/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/admin',
        element: <AdminProfile></AdminProfile>
      },
      {
        path: '/adopt',
        element: <AllPets></AllPets>
      },
      {
        path: '/details',
        element: <PetDetails></PetDetails>
      },
      {
        path: '/profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/favouritelist',
        element: <FavouriteList></FavouriteList>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
