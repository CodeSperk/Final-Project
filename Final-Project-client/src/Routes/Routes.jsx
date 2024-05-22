import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import PrivateRout from "./PrivateRout";
import Secret from "../Pages/Secret/Secret";

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
  }
])

export default Routes;