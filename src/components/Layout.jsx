import React, { useState } from "react";
import {
  HomeOutlined,
  CodeOutlined,
  LineChartOutlined,
  ToolOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function CustomLayout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const getSelectedKeys = () => {
    if (location.pathname === "/") {
      return ["1"];
    }
    if (location.pathname === "/code-optimize") {
      return ["2"];
    }
    if (location.pathname === "/predictive-maintenance") {
      return ["3"];
    }
    if (location.pathname === "/performance-benchmark") {
      return ["4"];
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={getSelectedKeys()}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CodeOutlined />}>
            <Link to="/code-optimize">
              <span>Code Optimizer</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ToolOutlined />}>
            <Link to="/predictive-maintenance">
              <span>Predictive Maintenance</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LineChartOutlined />}>
            <Link to="/performance-benchmark">
              <span>Performance Benchmark</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
          className="bg-gray-100"
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
