import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { RouteGenrator } from "../utilities/RouteGenerator";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: RouteGenrator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    children: RouteGenrator(facultyPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: RouteGenrator(facultyPaths)
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]);

export default router;
