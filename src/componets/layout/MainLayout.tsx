import React from 'react';
import { Layout, Menu, MenuItemProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuItemProps["items"] = [
    {
        key:"Dashbord",
        label: <NavLink to="Dashbord">Dashbord</NavLink>
    },
    {
        key:"3",
        label: "Managemnt ",
        children: [
            {
                key:"Create admin",
                label: <NavLink to="create-admin">Student Managment</NavLink>
            },
            {
                key:"Create Faculty",
                label: <NavLink to="create-faculty">Create Faculty</NavLink>
            },
            {
              key:"Create Student",
              label: <NavLink to="create-student">Create Student</NavLink>
          }
        ]
    },
]
  

const MainLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div style={{color:"white",textAlign:"center", display:"flex",justifyContent: "center",alignItems:"center"} }>
            <h1 >Ph-Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet/>
              </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
