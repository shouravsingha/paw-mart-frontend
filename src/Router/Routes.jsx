import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/services",
            element: <Services></Services>
        },
        
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Register></Register>
        },
        {
            path: "/myprofile",
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: "/details/:id",
          element: <ServiceDetails></ServiceDetails>
        }
    ]
  },
]);

export default router;

