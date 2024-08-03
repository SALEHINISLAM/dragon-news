import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Rgister/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import Category from "../Pages/Category/Category";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News/></PrivateRoute>,
        loader: ()=>fetch('/news.json')
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/category/:id',
        element: <Category/>,
        loader: ()=>fetch('/news.json'),
      }
    ],
  },
]);

export default routes;
