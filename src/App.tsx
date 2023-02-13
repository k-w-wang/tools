import React, { Suspense, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { menus } from "./router/router";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

	const location = useLocation();

	const [openKeys, setOpenKeys] = useState(() => {
		return [
			location.pathname
				.split("/")
				.slice(0, location.pathname.split("/").length - 1)
				.join("/"),
		];
	});

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout className="root-layout">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[location.pathname]}
					openKeys={openKeys}
					items={menus}
					onOpenChange={setOpenKeys}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header style={{ padding: 0, background: colorBgContainer }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: () => setCollapsed(!collapsed),
						}
					)}
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						overflow: "auto",
					}}
				>
					<Suspense fallback={<div>Loading...</div>}>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;
