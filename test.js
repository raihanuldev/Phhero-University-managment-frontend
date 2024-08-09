const arr = [
  {
    name: "Dashbord",
    path: "/admin/dashbord",
    element: "ADMIN_DASHBORD",
  },
  {
    name: "Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Admin",
        path: "/admin/create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

// for sidebar 
// const result = arr.reduce((acc, item) => {

//     if(item.path && item.element){
//         acc.push({
//             key:item.name,
//             label:item.path
//         })
//     }
//     if(item.children){
//        acc.push({
//         key: item.name,
//         label: item.path,
//         children: item.children.map((child)=>({
//             key: child.name,
//             label: child.path
//         }))
//        })
//     }
//   return acc;
// }, []);


// for routes...........

// const result = arr.reduce((acc, item) => {

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
// }, []);

// console.log(result);
