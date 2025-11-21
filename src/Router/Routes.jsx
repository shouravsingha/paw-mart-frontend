import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";

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
            path: "/myprofile",
            element: <MyProfile></MyProfile>
        },
    ]
  },
]);

export default router;

