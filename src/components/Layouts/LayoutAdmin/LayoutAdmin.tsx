/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuSider from "./MenuSider";
import { useSelector } from "react-redux";
import Header from "../LayoutDefault/Header"
const { Sider, Content } = Layout;


const LayoutAdmin = () => {
	const authen = useSelector((state) => state.authenReducer);

	return (
		<>
			<Layout className="h-full">
				<Header />
				<Layout>
					<Sider
						breakpoint="lg"
						className="layout-admin__sider"
						theme="light"
						width={230}
					>
						<MenuSider />
					</Sider>
					<Content className="mx-[28px] mt-[100px] h-screen">
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default LayoutAdmin