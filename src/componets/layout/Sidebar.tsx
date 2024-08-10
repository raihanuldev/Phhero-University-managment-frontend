import { Menu } from "antd";
import { SideBarItemsGenerator } from "../../utilities/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import Sider from "antd/es/layout/Sider";
import { facultyPaths } from "../../routes/faculty.routes";

const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  const role = "faculty";

  let userItems;

  switch (role) {
    case userRole.ADMIN:
      userItems = SideBarItemsGenerator(adminPaths, role)
      break;
    case userRole.FACULTY:
      userItems = SideBarItemsGenerator(facultyPaths, role)
      break;
    case userRole.STUDENT:
      userItems = SideBarItemsGenerator(facultyPaths, role)
      break;
  
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Ph-Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={userItems}
      />
    </Sider>
  );
};

export default Sidebar;
