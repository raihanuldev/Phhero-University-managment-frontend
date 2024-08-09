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
            key:item.name,
            label:item.path
        })
    }
    if(item.children){
       acc.push({
        key: item.name,
        label: item.path,
        children: item.children.map((child)=>({
            key: child.name,
            label: child.path
        }))
       })
    }
  return acc;
}, []);

console.log(result);
