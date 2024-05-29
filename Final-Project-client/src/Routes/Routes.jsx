import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layouts/Dashboard";
import PrivateRout from "./PrivateRout";
import MyCart from "../Pages/Dashboard/UsersPages/MyCart/MyCart";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UsersPages/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/UsersPages/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/UsersPages/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/UsersPages/AddReview/AddReview";
import MyBookings from "../Pages/Dashboard/UsersPages/MyBookings/MyBookings";
import AddItems from "../Pages/Dashboard/AdminPages/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/AdminPages/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/AdminPages/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/AdminPages/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import UpdateItem from "../Pages/Dashboard/AdminPages/UpdateItem/UpdateItem";

const Routes = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },{
        path:"/order/:category",
        element:<Order></Order>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/secret",
        element:<PrivateRout><Secret></Secret></PrivateRout>
      }
    ]
  },
  {
    path:"/register",
    element:<Register></Register>
  },
  {
    path:"/dashboard",
    element:<PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children:[
      // Admin routes
      {
      path:"",
        element: <AdminHome><AdminHome></AdminHome></AdminHome>
      },
      {
        path:"addItems",
        element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path:"manageItems",
        element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path:"manageBookings",
        element:<AdminRoutes><ManageBookings></ManageBookings></AdminRoutes>
      },
      {
        path:"update/:id",
        element:<AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>
      },
      {
        path:"users",
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },

      // Users Routes
      {
        path:"userHome",
        element: <UserHome></UserHome>
      },
      {
        path:"reservation",
        element:<Reservation></Reservation>
      },
      {
        path:"payment",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path: "cart",
        element:<MyCart></MyCart>
      },
      {
        path:"addReview",
        element:<AddReview></AddReview>
      },
      {
        path:"bookings",
        element:<MyBookings></MyBookings>
      }
    ]
  }
])

export default Routes;