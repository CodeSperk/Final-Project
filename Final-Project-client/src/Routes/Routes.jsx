import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  }
])

export default Routes;