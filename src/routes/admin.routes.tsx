import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


type Route ={
    path: string;
    element: JSX.Element;
}

const adminPaths2 = [
  {
    name: "Dashbord",
    path: "dashbord",
    element: <AdminDashbord />,
  },
  {
    name: "Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin/>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty/>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent/>,
      },
    ],
  },
];

export const adminRoutes = adminPaths2.reduce((acc, item) => {

    if(item.path && item.element){
        acc.push({
            path:item.path,
            element:item.element
        })
    }
    if(item.children){
        item.children.forEach((child)=>{
            acc.push({
                path: child.path,
                element:child.element,
            })
        })
    }
  return acc;
}, [] as Route[]);
console.log(adminRoutes);
// export const adminPaths = [
//   {
//     path: "dashbord",
//     element: <AdminDashbord />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
