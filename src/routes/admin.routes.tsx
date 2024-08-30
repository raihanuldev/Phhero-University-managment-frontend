import AcademicSemester from "../pages/admin/academic-managment/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academic-managment/CreateAcademicSemester";
import AdminDashbord from "../pages/admin/AdminDashbord";
// import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateAcademicFaculty from "../pages/admin/academic-managment/CreateFaculty";
import AcademicFaculty from "../pages/admin/academic-managment/AcademicFaculty";
import AcademicDepartment from "../pages/admin/academic-managment/AcademicDepartment";
import CreateADepartment from "../pages/admin/academic-managment/CreateADepartment";
import CreateAdmin from "../pages/admin/user-Mangement/CreateAdmin";
import CreateFaculty from "../pages/admin/user-Mangement/CreateFaculty";
import CreateStudent from "../pages/admin/user-Mangement/CreateStudent";
import StudentData from "../pages/admin/user-Mangement/StudentData";
import StudentDetails from "../pages/admin/user-Mangement/StudentDetails";
// import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashbord",
    path: "dashbord",
    element: <AdminDashbord />,
  },
  {
    name: "Academic Managemnt",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateADepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Managemnt",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      
    ],
  },
  
];

// // Admin SIdebar Programmatical logic
// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TAdminSidebar[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );

// export const adminRoutes = adminPaths2.reduce((acc, item) => {

//     if(item.path && item.element){
//         acc.push({
//             path:item.path,
//             element:item.element
//         })
//     }
//     if(item.children){
//         item.children.forEach((child)=>{
//             acc.push({
//                 path: child.path,
//                 element:child.element,
//             })
//         })
//     }
//   return acc;
// }, [] as TRoute[]);
// console.log(adminRoutes);

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
