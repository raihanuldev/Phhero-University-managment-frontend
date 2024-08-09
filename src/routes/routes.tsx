import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateStudent from "../pages/admin/CreateStudent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
        
      {
        path: "dashbord",
        element: <AdminDashbord />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      }
    ],
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
