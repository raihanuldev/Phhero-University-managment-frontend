import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuItemProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuItemProps["items"] = [
    {
        key:"1",
        label: "Dashbord"
    },
    {
        key:"2",
        label: "Profile"
    },
    {
        key:"3",
        label: "Managemnt ",
        children: [
            {
                key:"5",
                label: "Student Managment"
            },
            {
                key:"7",
                label: "Teacher Managment"
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
            <h1 style={{height: "4rem"}}>Ph-Uni</h1>
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
            <p>Main Content should go here</p>
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
