import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

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
      }
    ]
  }
])

export default Routes;