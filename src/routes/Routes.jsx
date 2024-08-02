import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Rgister/Register";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/career',
                element:<Career/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default routes;