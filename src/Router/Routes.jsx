import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPass from "../Pages/ForgetPass";
import Error from "../Pages/Error";
import AddListing from "../Pages/AddListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
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
          path: "/details/:myId",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path: "/forget/:email",
          element: <ForgetPass></ForgetPass>
        },
        {
          path: "/addlisting",
          element: <AddListing></AddListing>
        }
    ]
  },
]);

export default router;

