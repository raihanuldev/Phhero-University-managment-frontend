const arr = [
  {
    name: "Dashbord",
    path: "dashbord",
    element: "ADMIN_DASHBORD",
  },
  {
    name: "Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Admin",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const result = arr.reduce((acc, item) => {

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
}, []);

console.log(result);
