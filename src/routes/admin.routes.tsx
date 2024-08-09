import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


export const adminPaths = [
        
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
  ]